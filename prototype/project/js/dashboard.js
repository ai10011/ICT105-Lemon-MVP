document.addEventListener('DOMContentLoaded', async function () {
    let user = null;
    try {
        const raw = localStorage.getItem('lemon_current_user') || sessionStorage.getItem('lemon_current_user');
        if (raw) user = JSON.parse(raw);
    } catch (e) {
        console.error('Error parsing user session data:', e);
    }

    const fullName = (user && user.full_name) ? user.full_name : 'Campus User';
    const firstName = fullName.trim().split(' ')[0] || 'User';
    const email = (user && user.email) ? user.email : 'user@university.edu';

    const greetingEl = document.getElementById('user-greeting');
    const nameEl = document.getElementById('profile-name');
    const emailEl = document.getElementById('profile-email');

    if (greetingEl) greetingEl.textContent = 'Welcome back, ' + firstName + '!';
    if (nameEl) nameEl.textContent = fullName;
    if (emailEl) emailEl.textContent = email;

    const allRecords = await LemonData.getRecords();
    const records = allRecords.filter(r => {
        if (!user) return false;
        const isOwner = r.userId && String(r.userId) === String(user.id);
        const isClaimer = r.claimedByUserId && String(r.claimedByUserId) === String(user.id);
        return isOwner || isClaimer;
    });

    const userSubmissions = records.filter(r => user && r.userId && String(r.userId) === String(user.id));
    const totalReported = userSubmissions.length;
    const foundCount = userSubmissions.filter(r => (r.reportType || '').toLowerCase().includes('completed')).length;
    const pendingClaimsCount = records.filter(r => user && r.claimedByUserId && String(r.claimedByUserId) === String(user.id) && r.claimStatus === 'Pending').length;
    const successRate = totalReported > 0 ? Math.round((foundCount / totalReported) * 100) : 0;

    const statReported = document.getElementById('stat-items-reported');
    const statFound = document.getElementById('stat-items-found');
    const statPending = document.getElementById('stat-pending-claims');
    const statRate = document.getElementById('stat-success-rate');

    if (statReported) statReported.textContent = totalReported;
    if (statFound) statFound.textContent = foundCount;
    if (statPending) statPending.textContent = pendingClaimsCount;
    if (statRate) statRate.textContent = `${successRate}%`;

    const container = document.getElementById('user-reports-list');

    const editModal = document.getElementById('edit-profile-modal');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const cancelModalBtn = document.getElementById('cancel-modal-btn');
    const editProfileForm = document.getElementById('edit-profile-form');
    const nameInput = document.getElementById('modal-input-name');
    const emailInput = document.getElementById('modal-input-email');

    function openModal() {
        if (nameInput) nameInput.value = fullName;
        if (emailInput) emailInput.value = email;
        if (editModal) editModal.classList.remove('hidden');
    }

    function closeModal() {
        if (editModal) editModal.classList.add('hidden');
    }

    if (editProfileBtn) editProfileBtn.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);
    if (editModal) {
        editModal.addEventListener('click', function (e) {
            if (e.target === editModal) closeModal();
        });
    }

    if (editProfileForm) {
        editProfileForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const newName = nameInput ? nameInput.value.trim() : '';
            const newEmail = emailInput ? emailInput.value.trim() : '';

            if (newName) {
                if (!user) user = { id: 'usr_' + Date.now() };
                const oldEmail = user.email;
                user.full_name = newName;
                if (newEmail) user.email = newEmail;

                const uJson = JSON.stringify(user);
                localStorage.setItem('lemon_current_user', uJson);
                sessionStorage.setItem('lemon_current_user', uJson);

                try {
                    const saved = localStorage.getItem('lemon_users');
                    if (saved) {
                        let uList = JSON.parse(saved);
                        const idx = uList.findIndex(u => String(u.id) === String(user.id) || u.email === oldEmail);
                        if (idx !== -1) {
                            uList[idx].full_name = user.full_name;
                            uList[idx].email = user.email;
                        } else {
                            uList.push(user);
                        }
                        localStorage.setItem('lemon_users', JSON.stringify(uList, null, 2));
                    }
                } catch (err) { }

                const payload = {
                    id: user.id,
                    full_name: user.full_name,
                    email: user.email,
                    oldEmail: oldEmail
                };

                try {
                    await fetch('/api/users/update', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                } catch (err) {
                    try {
                        await fetch('http://localhost:3000/api/users/update', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                        });
                    } catch (e2) { }
                }

                closeModal();
                window.location.reload();
            }
        });
    }

    if (!container) return;

    if (records.length === 0) {
        container.innerHTML = `
            <div class="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg text-center">
                <p class="text-on-surface-variant text-sm">You have no submitted or claimed reports yet.</p>
            </div>
        `;
        return;
    }

    const reviewMatchBtn = document.getElementById('review-match-btn');
    if (reviewMatchBtn) {
        reviewMatchBtn.addEventListener('click', function () {
            alert('Potential Match Details:\n\nItem: Black HP Laptop Charger\nFound at: Main Library Security Desk\nStatus: Available for pickup & verification.');
        });
    }

    window.deleteReport = async function (id) {
        const target = records.find(r => String(r.id) === String(id));
        if (target && (target.reportType || '').toLowerCase().includes('completed')) {
            alert('Completed reports cannot be deleted.');
            return;
        }

        if (!confirm('Are you sure you want to delete this report?')) return;

        try {
            await fetch(`/api/records?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
        } catch (e) { }

        try {
            const saved = localStorage.getItem('lemon_records');
            if (saved) {
                let localRecs = JSON.parse(saved);
                localRecs = localRecs.filter(r => String(r.id) !== String(id));
                localStorage.setItem('lemon_records', JSON.stringify(localRecs));
            }
        } catch (e) { }

        alert('Report deleted successfully!');
        window.location.reload();
    };

    container.innerHTML = records.map(rec => {
        const statusStr = (rec.reportType || '').toLowerCase();
        const isCompleted = statusStr.includes('completed');
        const isFound = statusStr.includes('found');
        const isClaimPending = rec.claimStatus === 'Pending';

        const isOwner = user && rec.userId && String(rec.userId) === String(user.id);
        const isClaimer = user && rec.claimedByUserId && String(rec.claimedByUserId) === String(user.id);

        let badgeText = isCompleted ? 'COMPLETED' : (isFound ? 'FOUND' : 'SEARCHING');
        let badgeBg = isCompleted ? 'bg-emerald-600 text-white' : (isFound ? 'bg-primary text-on-primary' : 'bg-surface-variant text-on-surface-variant');
        let icon = isCompleted ? 'check_circle' : (isFound ? 'task_alt' : 'search');

        if (isClaimPending && !isCompleted) {
            badgeText = 'CLAIM REQUESTED';
            badgeBg = 'bg-amber-500 text-white';
            icon = 'notifications_active';
        }

        const timeAgo = LemonData.formatTimeAgo(rec.created_at || rec.date);
        const photoSrc = rec.photoPath || rec.photoData || null;

        let mediaHtml = `
            <div class="w-full h-full flex items-center justify-center bg-surface-variant border-2 border-dashed border-outline-variant text-on-surface-variant">
                <span class="material-symbols-outlined text-4xl opacity-50">image</span>
            </div>
        `;
        if (photoSrc) {
            mediaHtml = `<img src="${photoSrc}" alt="${rec.itemName}" class="w-full h-full object-cover">`;
        }

        const deleteBtnHtml = (isOwner && !isCompleted) ? `
            <button onclick="deleteReport('${rec.id}')"
                class="text-error hover:bg-error-container/20 px-md py-sm rounded-lg font-body-bold transition-colors text-sm flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">delete</span> Delete
            </button>
        ` : '';

        let claimerNoticeHtml = '';
        if (isClaimPending && !isCompleted) {
            if (isOwner) {
                claimerNoticeHtml = `
                    <div class="mt-sm bg-amber-50 border border-amber-200 text-amber-900 px-md py-xs rounded-lg text-xs flex items-center gap-xs">
                        <span class="material-symbols-outlined text-sm text-amber-600">person</span>
                        Claim requested by <strong>${rec.claimedByName || 'Student'}</strong> (${rec.claimedByEmail || 'No email'})
                    </div>
                `;
            } else if (isClaimer) {
                claimerNoticeHtml = `
                    <div class="mt-sm bg-amber-50 border border-amber-200 text-amber-900 px-md py-xs rounded-lg text-xs flex items-center gap-xs">
                        <span class="material-symbols-outlined text-sm text-amber-600">hourglass_top</span>
                        You requested to claim this item (Pending verification)
                    </div>
                `;
            }
        }

        return `
            <article class="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col md:flex-row relative">
                <div class="absolute top-sm left-sm z-10 ${badgeBg} px-sm py-xs rounded-full text-label-caps border border-outline shadow-sm flex items-center gap-xs">
                    <span class="material-symbols-outlined text-[16px]">${icon}</span> ${badgeText}
                </div>
                <div class="w-full md:w-48 h-48 md:h-auto bg-surface-container-high flex-shrink-0 overflow-hidden">
                    ${mediaHtml}
                </div>
                <div class="p-lg flex flex-col justify-between w-full">
                    <div>
                        <div class="flex justify-between items-start">
                            <h4 class="font-subheading-sm text-on-surface">${rec.itemName || 'Unnamed Item'}</h4>
                            <span class="text-on-surface-variant text-sm">${timeAgo}</span>
                        </div>
                        <p class="text-on-surface-variant text-sm mt-xs">${rec.description || rec.location || 'No details'}</p>
                        ${claimerNoticeHtml}
                    </div>
                    <div class="mt-md flex justify-end gap-sm">
                        ${deleteBtnHtml}
                        <button onclick="window.location.href='detail.html?id=${encodeURIComponent(rec.id)}'"
                            class="text-primary hover:bg-primary-container/20 px-md py-sm rounded-lg font-body-bold transition-colors text-sm flex items-center gap-1">
                            <span class="material-symbols-outlined text-sm">visibility</span> View Details
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
});
