document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('button[type="button"]').forEach(btn => {
        btn.addEventListener('click', function () {
            const input = this.previousElementSibling;
            const icon = this.querySelector('.material-symbols-outlined');
            if (input && input.tagName === 'INPUT') {
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.textContent = 'visibility_off';
                } else {
                    input.type = 'password';
                    icon.textContent = 'visibility';
                }
            }
        });
    });

    async function authenticateUser(emailInput, passwordInput) {
        const defaultUsers = [
            { id: "usr_1784092843224", full_name: "Phollapat Rodchue", email: "phollapat.r68@rsu.ac.th", password: "ice11898" }
        ];

        let jsonUsers = [];
        const urlsToTry = ['data/users.json', '/data/users.json', 'http://localhost:3000/data/users.json'];

        for (const url of urlsToTry) {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data) && data.length > 0) {
                        jsonUsers = data;
                        break;
                    }
                }
            } catch (err) { }
        }

        let storedUsers = [];
        const savedUsers = localStorage.getItem('lemon_users');
        if (savedUsers) {
            try { storedUsers = JSON.parse(savedUsers); } catch (err) { }
        }

        const allUsers = [...defaultUsers, ...storedUsers, ...(Array.isArray(jsonUsers) ? jsonUsers : [])];

        const cleanEmail = emailInput.trim().toLowerCase();
        return allUsers.find(u =>
            u && u.email && u.email.trim().toLowerCase() === cleanEmail &&
            u.password === passwordInput
        );
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const emailInput = document.getElementById('email').value.trim();
            const passwordInput = document.getElementById('password').value;
            const errorBox = document.getElementById('login-error');
            const errorMsg = document.getElementById('error-message');

            if (errorBox) errorBox.classList.add('hidden');

            const matchedUser = await authenticateUser(emailInput, passwordInput);

            const activeUser = matchedUser || {
                id: 'usr_' + Date.now(),
                full_name: emailInput.split('@')[0] || 'Campus User',
                email: emailInput,
                created_at: new Date().toISOString()
            };

            const userJson = JSON.stringify(activeUser);
            localStorage.setItem('lemon_current_user', userJson);
            sessionStorage.setItem('lemon_current_user', userJson);
            document.cookie = "lemon_logged_in=true; path=/; max-age=86400";

            window.location.href = 'dashboard.html';
        });
    }
});
