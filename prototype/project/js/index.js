document.addEventListener('DOMContentLoaded', async function () {
    const searchInput = document.getElementById('home-search-input');
    const locSelect = document.getElementById('home-location-select');
    const searchBtn = document.getElementById('home-search-btn');

    function performSearch() {
        const searchVal = searchInput ? searchInput.value.trim() : '';
        const locVal = locSelect ? locSelect.value : '';
        window.location.href = `records.html?search=${encodeURIComponent(searchVal)}&location=${encodeURIComponent(locVal)}`;
    }

    if (searchBtn) searchBtn.addEventListener('click', performSearch);
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') performSearch();
        });
    }

    const allRecords = await LemonData.getRecords();
    const activeRecords = allRecords.filter(r => !(r.reportType || '').toLowerCase().includes('completed'));
    const recent = activeRecords.slice(0, 3);
    const grid = document.getElementById('recent-finds-grid');

    if (!grid) return;

    if (recent.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-lg text-center bg-surface-container-lowest rounded-xl border border-outline-variant p-md">
                <p class="text-on-surface-variant text-sm">No items submitted yet. Use "Report an Item" to add one!</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = recent.map(rec => {
        const isFound = (rec.reportType || '').toLowerCase().includes('found');
        const badgeClass = isFound ? 'bg-primary text-on-primary' : 'bg-error text-on-error';
        const badgeText = isFound ? 'FOUND' : 'LOST';
        const photoSrc = rec.photoPath || rec.photoData || null;

        let mediaHtml = `
            <div class="w-full h-full flex items-center justify-center bg-surface-variant border-2 border-dashed border-outline-variant text-on-surface-variant">
                <span class="material-symbols-outlined text-4xl opacity-50">image</span>
            </div>
        `;
        if (photoSrc) {
            mediaHtml = `<img src="${photoSrc}" alt="${rec.itemName}" class="w-full h-full object-cover">`;
        }

        const category = (rec.category || 'General').toUpperCase();
        const timeAgo = LemonData.formatTimeAgo(rec.created_at || rec.date);

        return `
            <div onclick="window.location.href='detail.html?id=${encodeURIComponent(rec.id)}'"
                class="bg-surface-container-lowest rounded-[12px] border border-outline-variant overflow-hidden hover:shadow-md transition-shadow relative group cursor-pointer">
                <div class="absolute top-sm left-sm ${badgeClass} px-sm py-xs rounded-full font-label-caps text-label-caps z-10 shadow-sm">
                    ${badgeText}
                </div>
                <div class="h-48 bg-surface-variant relative overflow-hidden">
                    ${mediaHtml}
                </div>
                <div class="p-md">
                    <div class="flex items-center gap-xs text-on-surface-variant font-label-caps text-label-caps mb-xs">
                        <span class="material-symbols-outlined text-sm">label</span>
                        <span class="">${category}</span>
                    </div>
                    <h3 class="font-body-bold text-body-bold text-on-background mb-sm truncate">${rec.itemName || 'Unnamed Item'}</h3>
                    <div class="flex items-center gap-xs text-on-surface-variant text-sm mb-xs">
                        <span class="material-symbols-outlined text-[16px]">location_on</span>
                        <span class="truncate">${rec.location || 'Campus'}</span>
                    </div>
                    <p class="text-sm text-on-secondary-container">Reported ${timeAgo}</p>
                </div>
            </div>
        `;
    }).join('');
});
