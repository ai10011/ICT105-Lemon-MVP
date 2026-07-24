document.addEventListener('DOMContentLoaded', async function () {
    const records = await LemonData.getRecords();

    const total = records.length;
    const found = records.filter(r => (r.reportType || '').toLowerCase().includes('found')).length;
    const rate = total > 0 ? Math.round((found / total) * 100) : 0;

    const totalEl = document.getElementById('admin-total-secured');
    const pendingEl = document.getElementById('admin-pending-claims');
    const rateEl = document.getElementById('admin-success-rate');

    if (totalEl) totalEl.textContent = total;
    if (pendingEl) pendingEl.textContent = total - found;
    if (rateEl) rateEl.textContent = `${rate}%`;

    const rateBar = document.getElementById('admin-rate-bar');
    if (rateBar) rateBar.style.width = `${rate}%`;

    const tbody = document.getElementById('admin-records-tbody');
    if (!tbody) return;

    if (records.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="p-lg text-center text-on-surface-variant">No reports found in the system.</td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = records.map(rec => {
        const isFound = (rec.reportType || '').toLowerCase().includes('found');
        const statusBg = isFound ? 'bg-tertiary-container text-on-tertiary-container border-tertiary/20' : 'bg-error-container text-on-error-container border-error/20';
        const statusIcon = isFound ? 'check_circle' : 'warning';
        const statusLabel = isFound ? 'Found' : 'Lost - Active';

        const photoSrc = rec.photoPath || rec.photoData || null;
        let iconHtml = `<span class="material-symbols-outlined text-secondary">inventory_2</span>`;
        if (photoSrc) {
            iconHtml = `<img src="${photoSrc}" alt="" class="w-full h-full object-cover rounded-lg">`;
        }

        const dateStr = rec.date || (rec.created_at ? rec.created_at.split('T')[0] : 'Recent');

        return `
            <tr class="hover:bg-surface-bright transition-colors group cursor-pointer" onclick="window.location.href='detail.html?id=${encodeURIComponent(rec.id)}'">
                <td class="p-md flex items-center space-x-md">
                    <div class="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center shrink-0 border border-outline-variant overflow-hidden">
                        ${iconHtml}
                    </div>
                    <div>
                        <p class="font-body-bold text-on-surface group-hover:text-primary transition-colors">${rec.itemName || 'Unnamed Item'}</p>
                        <p class="text-sm text-on-surface-variant truncate max-w-xs">${rec.description || rec.category || ''}</p>
                    </div>
                </td>
                <td class="p-md">
                    <span class="inline-flex items-center px-sm py-xs rounded-full text-xs font-bold ${statusBg} border">
                        <span class="material-symbols-outlined text-[14px] mr-1">${statusIcon}</span>
                        ${statusLabel}
                    </span>
                </td>
                <td class="p-md text-on-surface-variant">${rec.location || 'Campus'}</td>
                <td class="p-md text-on-surface-variant">${dateStr}</td>
                <td class="p-md text-right" onclick="event.stopPropagation()">
                    <button onclick="window.location.href='detail.html?id=${encodeURIComponent(rec.id)}'"
                        class="p-sm text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-colors active:scale-95">
                        <span class="material-symbols-outlined">visibility</span>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
    // Admin Mobile Sidebar Drawer Handlers
    const adminMenuBtn = document.getElementById('admin-mobile-menu-btn');
    const closeAdminBtn = document.getElementById('close-admin-sidebar-btn');
    const adminSidebar = document.getElementById('admin-sidebar');
    const adminOverlay = document.getElementById('admin-sidebar-overlay');

    function openAdminSidebar() {
        if (adminSidebar) {
            adminSidebar.classList.remove('hidden');
            adminSidebar.classList.add('flex');
        }
        if (adminOverlay) {
            adminOverlay.classList.remove('hidden');
        }
    }

    function closeAdminSidebar() {
        if (adminSidebar) {
            adminSidebar.classList.add('hidden');
            adminSidebar.classList.remove('flex');
        }
        if (adminOverlay) {
            adminOverlay.classList.add('hidden');
        }
    }

    if (adminMenuBtn) adminMenuBtn.addEventListener('click', openAdminSidebar);
    if (closeAdminBtn) closeAdminBtn.addEventListener('click', closeAdminSidebar);
    if (adminOverlay) adminOverlay.addEventListener('click', closeAdminSidebar);
});

