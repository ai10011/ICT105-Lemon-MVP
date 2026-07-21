document.addEventListener('DOMContentLoaded', async function () {
    const params = new URLSearchParams(window.location.search);
    const recordId = params.get('id');
    const record = await LemonData.getRecordById(recordId);

    if (!record) {
        document.getElementById('item-title').textContent = 'Item Not Found';
        return;
    }

    document.title = `${record.itemName || 'Item Details'} - Lemon Campus`;
    document.getElementById('item-title').textContent = record.itemName || 'Unnamed Item';
    document.getElementById('item-description').textContent = record.description || 'No detailed description available.';
    document.getElementById('location-text').textContent = record.location || 'Campus Location';

    const dateStr = record.date || (record.created_at ? record.created_at.split('T')[0] : '');
    document.getElementById('item-date').innerHTML = `
        <span class="material-symbols-outlined text-[18px] mr-1">schedule</span>
        Reported on ${dateStr || 'Recent Date'} (${LemonData.formatTimeAgo(record.created_at || record.date)})
    `;

    const reporterNameEl = document.getElementById('item-reporter-name');
    if (reporterNameEl) {
        if (record.reporterName) {
            reporterNameEl.textContent = record.reporterName;
        } else if (record.userId) {
            const matchedUser = await LemonData.getUserById(record.userId);
            if (matchedUser && matchedUser.full_name) {
                reporterNameEl.textContent = matchedUser.full_name;
            } else if (matchedUser && matchedUser.email) {
                reporterNameEl.textContent = matchedUser.email;
            } else {
                reporterNameEl.textContent = 'Campus User (' + record.userId.substring(0, 10) + ')';
            }
        } else {
            reporterNameEl.textContent = 'Campus Student';
        }
    }

    const statusLower = (record.reportType || '').toLowerCase();
    const isCompleted = statusLower.includes('completed');
    const isFound = statusLower.includes('found');
    const isClaimPending = record.claimStatus === 'Pending';

    let badgeText = isCompleted ? 'RESOLVED / COMPLETED' : (isFound ? 'FOUND ITEM' : 'LOST ITEM');
    let badgeBg = isCompleted ? 'bg-emerald-600 text-white' : (isFound ? 'bg-primary text-on-primary' : 'bg-error text-on-error');

    if (isClaimPending && !isCompleted) {
        badgeText = 'CLAIM REQUESTED';
        badgeBg = 'bg-amber-500 text-white';
    }

    const badgeEl = document.getElementById('badge-status');
    if (badgeEl) {
        badgeEl.textContent = badgeText;
        badgeEl.className = `absolute top-4 left-4 ${badgeBg} px-3 py-1 rounded-full font-label-caps text-label-caps shadow-sm`;
    }

    let currentUser = null;
    try {
        const uStr = localStorage.getItem('lemon_current_user') || sessionStorage.getItem('lemon_current_user');
        if (uStr) currentUser = JSON.parse(uStr);
    } catch (e) { }

    const isReporter = currentUser && record.userId && String(currentUser.id) === String(record.userId);
    const isClaimer = currentUser && record.claimedByUserId && String(currentUser.id) === String(record.claimedByUserId);
    const actionContainer = document.getElementById('action-buttons-container');

    if (actionContainer) {
        if (isCompleted) {
            actionContainer.innerHTML = `
                <div class="w-full h-12 bg-emerald-100 border border-emerald-300 text-emerald-800 font-body-bold text-body-bold rounded-lg flex items-center justify-center gap-2 shadow-sm">
                    <span class="material-symbols-outlined text-lg">verified</span> Case Resolved & Closed
                </div>
                <button onclick="window.location.href='dashboard.html'" class="w-full h-12 bg-surface-container-lowest border border-outline-variant text-on-surface font-body-bold text-body-bold rounded-lg hover:bg-surface-container transition-colors flex items-center justify-center">
                    Back to Dashboard
                </button>
            `;
        } else if (isReporter && isClaimPending) {
            actionContainer.innerHTML = `
                <div class="bg-amber-50 border border-amber-300 rounded-xl p-md mb-xs text-amber-900 shadow-sm text-left">
                    <div class="flex items-start gap-sm">
                        <span class="material-symbols-outlined text-amber-600 mt-xs text-xl">notifications_active</span>
                        <div>
                            <h4 class="font-body-bold text-amber-900 text-sm">Claim Request Pending</h4>
                            <p class="text-xs text-amber-800 mt-xs">
                                <strong>${record.claimedByName || 'A student'}</strong> (${record.claimedByEmail || 'No email'}) requested to claim this item.
                            </p>
                        </div>
                    </div>
                </div>
                <button id="approve-claim-btn" class="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-body-bold text-body-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <span class="material-symbols-outlined text-lg">check_circle</span> Approve Claim & Mark Resolved
                </button>
                <button id="decline-claim-btn" class="w-full h-12 bg-surface-container-lowest border border-error/50 text-error font-body-bold text-body-bold rounded-lg hover:bg-error-container/20 transition-colors flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg">cancel</span> Decline Claim
                </button>
            `;

            document.getElementById('approve-claim-btn')?.addEventListener('click', async function () {
                if (!confirm(`Approve claim by ${record.claimedByName || 'this user'} and mark as resolved?`)) return;

                const patchPayload = { id: record.id, reportType: 'Completed', claimStatus: 'Approved' };
                try {
                    await fetch('/api/records', {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(patchPayload)
                    });
                } catch (e) { }

                try {
                    const saved = localStorage.getItem('lemon_records');
                    if (saved) {
                        let localRecs = JSON.parse(saved);
                        const target = localRecs.find(r => String(r.id) === String(record.id));
                        if (target) Object.assign(target, patchPayload);
                        localStorage.setItem('lemon_records', JSON.stringify(localRecs));
                    }
                } catch (e) { }

                alert('Claim approved! Report marked as Completed.');
                window.location.href = 'dashboard.html';
            });

            document.getElementById('decline-claim-btn')?.addEventListener('click', async function () {
                if (!confirm('Decline this claim request?')) return;

                const patchPayload = { id: record.id, claimStatus: null, claimedByName: null, claimedByEmail: null, claimedByUserId: null };
                try {
                    await fetch('/api/records', {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(patchPayload)
                    });
                } catch (e) { }

                try {
                    const saved = localStorage.getItem('lemon_records');
                    if (saved) {
                        let localRecs = JSON.parse(saved);
                        const target = localRecs.find(r => String(r.id) === String(record.id));
                        if (target) Object.assign(target, patchPayload);
                        localStorage.setItem('lemon_records', JSON.stringify(localRecs));
                    }
                } catch (e) { }

                alert('Claim request declined.');
                window.location.reload();
            });
        } else if (isReporter) {
            actionContainer.innerHTML = `
                <button id="primary-action-btn" class="w-full h-12 bg-primary text-on-primary font-body-bold text-body-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm">
                    <span class="material-symbols-outlined text-lg">check_circle</span> Mark as Resolved / Returned
                </button>
                <button onclick="window.location.href='dashboard.html'" class="w-full h-12 bg-surface-container-lowest border border-outline-variant text-on-surface font-body-bold text-body-bold rounded-lg hover:bg-surface-container transition-colors flex items-center justify-center">
                    Manage in Dashboard
                </button>
            `;
            document.getElementById('primary-action-btn')?.addEventListener('click', async function () {
                if (!confirm('Mark this report as resolved / returned?')) return;

                try {
                    await fetch(`/api/records`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: record.id, reportType: 'Completed' })
                    });
                } catch (e) { }

                try {
                    const saved = localStorage.getItem('lemon_records');
                    if (saved) {
                        let localRecs = JSON.parse(saved);
                        const target = localRecs.find(r => String(r.id) === String(record.id));
                        if (target) target.reportType = 'Completed';
                        localStorage.setItem('lemon_records', JSON.stringify(localRecs));
                    }
                } catch (e) { }

                alert('Report marked as Completed!');
                window.location.href = 'dashboard.html';
            });
        } else if (isClaimer && isClaimPending) {
            actionContainer.innerHTML = `
                <div class="w-full h-12 bg-amber-100 border border-amber-300 text-amber-900 font-body-bold text-body-bold rounded-lg flex items-center justify-center gap-2 shadow-sm mb-xs">
                    <span class="material-symbols-outlined text-lg">hourglass_top</span> You Requested to Claim This Item
                </div>
                <button onclick="window.location.href='dashboard.html'" class="w-full h-12 bg-surface-container-lowest border border-outline-variant text-on-surface font-body-bold text-body-bold rounded-lg hover:bg-surface-container transition-colors flex items-center justify-center">
                    Back to Dashboard
                </button>
            `;
        } else if (isFound) {
            actionContainer.innerHTML = `
                <button id="primary-action-btn" class="w-full h-12 bg-primary-container text-on-primary-container font-body-bold text-body-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm">
                    <span class="material-symbols-outlined text-lg">verified</span> Claim This Item
                </button>
                <button id="secondary-action-btn" class="w-full h-12 bg-surface-container-lowest border border-outline-variant text-on-surface font-body-bold text-body-bold rounded-lg hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg">mail</span> Contact Finder
                </button>
            `;
            document.getElementById('primary-action-btn')?.addEventListener('click', async function () {
                if (!currentUser) {
                    alert('Please log in first to claim this item.');
                    window.location.href = 'login.html';
                    return;
                }

                const claimerName = currentUser.full_name || 'Campus Student';
                const claimerEmail = currentUser.email || 'student@university.edu';
                const claimerId = currentUser.id;

                const patchPayload = {
                    id: record.id,
                    claimStatus: 'Pending',
                    claimedByName: claimerName,
                    claimedByEmail: claimerEmail,
                    claimedByUserId: claimerId
                };

                try {
                    await fetch('/api/records', {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(patchPayload)
                    });
                } catch (e) { }

                try {
                    const saved = localStorage.getItem('lemon_records');
                    if (saved) {
                        let localRecs = JSON.parse(saved);
                        const target = localRecs.find(r => String(r.id) === String(record.id));
                        if (target) Object.assign(target, patchPayload);
                        localStorage.setItem('lemon_records', JSON.stringify(localRecs));
                    }
                } catch (e) { }

                alert(`Claim request submitted!\n\n${claimerName} (${claimerEmail}) has been notified to the submitter.`);
                window.location.reload();
            });
            document.getElementById('secondary-action-btn')?.addEventListener('click', function () {
                if (!currentUser) {
                    alert('Please log in first to message the finder.');
                    window.location.href = 'login.html';
                } else {
                    alert('Opening conversation with the finder...');
                    window.location.href = 'dashboard.html';
                }
            });
        } else {
            actionContainer.innerHTML = `
                <button id="primary-action-btn" class="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-body-bold text-body-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <span class="material-symbols-outlined text-lg">front_hand</span> I Found This Item!
                </button>
                <button id="secondary-action-btn" class="w-full h-12 bg-surface-container-lowest border border-outline-variant text-on-surface font-body-bold text-body-bold rounded-lg hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg">mail</span> Contact Owner
                </button>
            `;
            document.getElementById('primary-action-btn')?.addEventListener('click', function () {
                if (!currentUser) {
                    alert('Please log in first to report finding this item.');
                    window.location.href = 'login.html';
                } else {
                    alert('Awesome! The owner of this lost item has been notified that you found it.');
                    window.location.href = 'dashboard.html';
                }
            });
            document.getElementById('secondary-action-btn')?.addEventListener('click', function () {
                if (!currentUser) {
                    alert('Please log in first to contact the owner.');
                    window.location.href = 'login.html';
                } else {
                    alert('Opening conversation with the owner...');
                    window.location.href = 'dashboard.html';
                }
            });
        }
    }

    const tagsContainer = document.getElementById('item-tags');
    if (tagsContainer) {
        const category = record.category || 'General';
        tagsContainer.innerHTML = `
            <span class="px-3 py-1 bg-primary-container/20 text-on-primary-container rounded-full font-label-caps text-label-caps border border-primary-container/30">${category}</span>
        `;
    }

    const imgContainer = document.getElementById('main-image-container');
    const photoSrc = record.photoPath || record.photoData || null;
    if (photoSrc && imgContainer) {
        imgContainer.innerHTML = `
            <img src="${photoSrc}" alt="${record.itemName}" class="w-full h-full object-cover">
            <div id="badge-status" class="absolute top-4 left-4 ${badgeBg} px-3 py-1 rounded-full font-label-caps text-label-caps shadow-sm">
                ${badgeText}
            </div>
        `;
    }
});
