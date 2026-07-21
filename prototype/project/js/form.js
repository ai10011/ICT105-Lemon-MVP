function handlePhotoSelect(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const label = document.getElementById('photo-label');
        if (label) {
            label.textContent = file.name;
            label.title = file.name;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById('photo-preview');
            const container = document.getElementById('photo-preview-container');
            const icon = document.getElementById('photo-icon');
            if (preview && container) {
                preview.src = e.target.result;
                container.classList.remove('hidden');
            }
            if (icon) icon.classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }
}

function compressPhoto(file, callback) {
    const reader = new FileReader();
    reader.onload = function (evt) {
        const img = new Image();
        img.onload = function () {
            const canvas = document.createElement('canvas');
            const maxDim = 500;
            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > maxDim) {
                    height = Math.round((height * maxDim) / width);
                    width = maxDim;
                }
            } else {
                if (height > maxDim) {
                    width = Math.round((width * maxDim) / height);
                    height = maxDim;
                }
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            callback(canvas.toDataURL('image/jpeg', 0.6));
        };
        img.onerror = function () {
            callback(evt.target.result);
        };
        img.src = evt.target.result;
    };
    reader.readAsDataURL(file);
}

document.addEventListener('DOMContentLoaded', function () {
    const reportForm = document.getElementById('report-form');
    if (reportForm) {
        reportForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const rawReportType = document.querySelector('input[name="reportType"]:checked')?.value || 'I Lost Something';
            const reportType = rawReportType.toLowerCase().includes('found') ? 'Found' : 'Lost';
            const itemName = document.getElementById('itemName').value.trim();
            const category = document.getElementById('category').value;
            const date = document.getElementById('date').value;
            const description = document.getElementById('description').value.trim();
            const location = document.getElementById('location').value.trim();
            const photoInput = document.getElementById('photo');
            let currentUser = null;
            try {
                const uStr = localStorage.getItem('lemon_current_user') || sessionStorage.getItem('lemon_current_user');
                if (uStr) currentUser = JSON.parse(uStr);
            } catch (err) { }

            function submitRecord(photoData, photoName) {
                const newRecord = {
                    id: 'rec_' + Date.now(),
                    userId: currentUser?.id || null,
                    reportType: reportType,
                    itemName: itemName,
                    category: category,
                    date: date,
                    description: description,
                    location: location,
                    photoName: photoName || '',
                    photoData: photoData || null,
                    created_at: new Date().toISOString()
                };

                let records = [];
                try {
                    const saved = localStorage.getItem('lemon_records');
                    if (saved) records = JSON.parse(saved);
                } catch (err) {
                    records = [];
                }
                records.push(newRecord);

                try {
                    localStorage.setItem('lemon_records', JSON.stringify(records));
                } catch (err) {
                    console.warn('LocalStorage quota exceeded. Retrying without photo for storage safety...', err);
                    newRecord.photoData = null;
                    try {
                        localStorage.setItem('lemon_records', JSON.stringify(records));
                    } catch (e2) {
                        console.error('LocalStorage save error:', e2);
                    }
                }

                if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
                    fetch('/api/records', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(newRecord)
                    }).catch(e => console.log('Server sync skipped:', e));
                }

                alert('Report submitted successfully!');
                window.location.href = 'records.html';
            }

            if (photoInput && photoInput.files[0]) {
                const file = photoInput.files[0];
                compressPhoto(file, function (compressedBase64) {
                    submitRecord(compressedBase64, file.name);
                });
            } else {
                submitRecord(null, '');
            }
        });
    }
});
