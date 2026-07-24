document.addEventListener('DOMContentLoaded', async function () {
    let allRecords = await LemonData.getRecords();

    const grid = document.getElementById('records-grid');
    const counter = document.getElementById('results-counter');
    const filterLost = document.getElementById('filter-lost');
    const filterFound = document.getElementById('filter-found');
    const filterCategory = document.getElementById('filter-category');
    const filterLocation = document.getElementById('filter-location');
    const filterSearch = document.getElementById('filter-search');
    const filterReset = document.getElementById('filter-reset');

    const urlParams = new URLSearchParams(window.location.search);
    const initialSearch = urlParams.get('search');
    const initialLocation = urlParams.get('location');
    if (initialSearch && filterSearch) filterSearch.value = initialSearch;
    if (initialLocation && initialLocation !== 'All Buildings' && filterLocation) {
        for (let option of filterLocation.options) {
            if (option.text.toLowerCase().includes(initialLocation.toLowerCase()) || initialLocation.toLowerCase().includes(option.value.toLowerCase())) {
                filterLocation.value = option.value;
                break;
            }
        }
    }

    function render() {
        if (!grid) return;

        const searchVal = filterSearch ? filterSearch.value.trim().toLowerCase() : '';
        const catVal = filterCategory ? filterCategory.value.toLowerCase() : '';
        const locVal = filterLocation ? filterLocation.value.toLowerCase() : '';
        const showLost = filterLost ? filterLost.checked : true;
        const showFound = filterFound ? filterFound.checked : true;

        const filtered = allRecords.filter(rec => {
            const status = (rec.reportType || '').toLowerCase();
            if (status.includes('completed')) return false;

            const isFound = status.includes('found');
            const isLost = status.includes('lost') || !isFound;

            if (isLost && !showLost) return false;
            if (isFound && !showFound) return false;

            if (catVal && !(rec.category || '').toLowerCase().includes(catVal)) return false;
            if (locVal && !(rec.location || '').toLowerCase().includes(locVal)) return false;

            if (searchVal) {
                const titleMatch = (rec.itemName || '').toLowerCase().includes(searchVal);
                const descMatch = (rec.description || '').toLowerCase().includes(searchVal);
                const locMatch = (rec.location || '').toLowerCase().includes(searchVal);
                if (!titleMatch && !descMatch && !locMatch) return false;
            }

            return true;
        });

        if (counter) counter.textContent = `Showing ${filtered.length} result${filtered.length === 1 ? '' : 's'}`;

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full py-xl text-center bg-surface-container-lowest rounded-xl border border-outline-variant p-lg">
                    <span class="material-symbols-outlined text-4xl text-on-surface-variant opacity-40 mb-2">search_off</span>
                    <h3 class="font-body-bold text-on-surface text-lg">No matching records found</h3>
                    <p class="text-on-surface-variant text-sm mt-1">Try resetting your filters or adjusting your search term.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map(rec => {
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

            const timeAgo = LemonData.formatTimeAgo(rec.created_at || rec.date);

            return `
                <div class="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow relative">
                    <span class="absolute top-sm left-sm ${badgeClass} font-label-caps text-label-caps px-sm py-xs rounded-full z-10 shadow-sm">${badgeText}</span>
                    <div class="h-48 bg-surface-container-highest relative overflow-hidden">
                        ${mediaHtml}
                    </div>
                    <div class="p-md flex-grow flex flex-col">
                        <h3 class="font-body-bold text-body-bold text-on-surface mb-xs line-clamp-1">${rec.itemName || 'Unnamed Item'}</h3>
                        <p class="text-on-surface-variant text-sm mb-md flex items-center gap-xs">
                            <span class="material-symbols-outlined text-[16px]">location_on</span> ${rec.location || 'Campus'}
                        </p>
                        <div class="mt-auto">
                            <p class="text-on-surface-variant text-xs mb-sm">Reported ${timeAgo}</p>
                            <button onclick="window.location.href='detail.html?id=${encodeURIComponent(rec.id)}'"
                                class="w-full h-10 border border-outline-variant text-on-surface font-body-bold rounded-lg hover:bg-surface-container-low transition-colors">View Details</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    [filterLost, filterFound, filterCategory, filterLocation, filterSearch].forEach(el => {
        if (el) el.addEventListener('input', render);
        if (el) el.addEventListener('change', render);
    });

    if (filterReset) {
        filterReset.addEventListener('click', function () {
            if (filterLost) filterLost.checked = true;
            if (filterFound) filterFound.checked = true;
            if (filterCategory) filterCategory.value = '';
            if (filterLocation) filterLocation.value = '';
            if (filterSearch) filterSearch.value = '';
            render();
        });
    }

    const mobileFilterToggle = document.getElementById('mobile-filter-toggle');
    const filterBox = document.getElementById('filter-container-box');
    const filterArrow = document.getElementById('mobile-filter-arrow');

    if (mobileFilterToggle && filterBox && filterArrow) {
        mobileFilterToggle.addEventListener('click', function () {
            const isHidden = filterBox.classList.contains('hidden');
            if (isHidden) {
                filterBox.classList.remove('hidden');
                filterArrow.style.transform = 'rotate(180deg)';
            } else {
                filterBox.classList.add('hidden');
                filterArrow.style.transform = 'rotate(0deg)';
            }
        });
    }

    render();
});

