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

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const fullName = document.getElementById('full_name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            let users = [];
            const savedUsers = localStorage.getItem('lemon_users');
            if (savedUsers) {
                try {
                    users = JSON.parse(savedUsers);
                } catch (err) {
                    users = [];
                }
            }

            const newUser = {
                id: 'usr_' + Date.now(),
                full_name: fullName,
                email: email,
                password: password,
                created_at: new Date().toISOString()
            };

            users.push(newUser);

            const jsonString = JSON.stringify(users, null, 2);
            localStorage.setItem('lemon_users', jsonString);

            const userJson = JSON.stringify(newUser);
            localStorage.setItem('lemon_current_user', userJson);
            sessionStorage.setItem('lemon_current_user', userJson);
            document.cookie = "lemon_logged_in=true; path=/; max-age=86400";

            if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
                fetch('/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newUser)
                }).catch(err => console.log('Server fetch fallback:', err));
            }

            window.location.href = 'dashboard.html';
        });
    }
});
