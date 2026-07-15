/**
 * Lemon Smart Campus - Shared Components Loader & Auth Manager
 * Handles dynamic insertion of header and footer into prototype HTML pages,
 * sets active menu highlights, manages auth state, and intercepts access
 * to protected features with a sleek pop-up modal on public pages.
 */

(function () {
    const PROTECTED_PAGES = ['form.html', 'dashboard.html', 'admin.html'];

    function isLoggedIn() {
        try {
            const item = localStorage.getItem('lemon_current_user') || sessionStorage.getItem('lemon_current_user');
            if (item) {
                const u = JSON.parse(item);
                if (u && (u.email || u.id || u.full_name)) return true;
            }
            if (document.cookie.includes('lemon_logged_in=true')) return true;
            return false;
        } catch (e) {
            return false;
        }
    }

    function getCurrentUser() {
        try {
            const item = localStorage.getItem('lemon_current_user') || sessionStorage.getItem('lemon_current_user');
            if (item) return JSON.parse(item);
        } catch (e) { }
        return null;
    }

    function showAuthModal(targetPage) {
        if (document.getElementById('auth-modal')) return;

        let featureName = 'access this page';
        if (targetPage.includes('form.html')) featureName = 'report a lost or found item';
        else if (targetPage.includes('dashboard.html')) featureName = 'view your dashboard and notifications';
        else if (targetPage.includes('admin.html')) featureName = 'access the Security Office admin portal';

        const modal = document.createElement('div');
        modal.id = 'auth-modal';
        modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center bg-black/65 backdrop-blur-md p-4 transition-opacity duration-300';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border border-slate-100 flex flex-col items-center text-center relative z-[100000] animate-in zoom-in-95 duration-200">
                <button id="close-auth-modal" class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-full hover:bg-slate-100 cursor-pointer">
                    <span class="material-symbols-outlined text-xl">close</span>
                </button>
                <div class="w-16 h-16 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center mb-5 shadow-inner">
                    <span class="material-symbols-outlined text-amber-800 text-3xl">lock</span>
                </div>
                <h3 class="text-2xl font-extrabold text-slate-900 mb-2">Login Required</h3>
                <p class="text-slate-600 text-sm leading-relaxed mb-6">
                    You need to log in first before you can ${featureName}. Please sign in to your Lemon account to continue.
                </p>
                <div class="flex flex-col sm:flex-row w-full gap-3">
                    <a href="login.html" class="flex-1 h-12 bg-slate-900 hover:bg-black text-amber-300 font-bold rounded-xl flex items-center justify-center gap-2 shadow transition-all text-sm">
                        <span class="material-symbols-outlined text-base">login</span>
                        Log In Now
                    </a>
                    <button id="cancel-auth-modal" class="flex-1 h-12 border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold rounded-xl flex items-center justify-center gap-2 transition-all text-sm cursor-pointer">
                        Continue Browsing
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        const removeModal = () => {
            const m = document.getElementById('auth-modal');
            if (m) m.remove();
            document.body.style.overflow = '';
        };

        document.getElementById('close-auth-modal')?.addEventListener('click', removeModal);
        document.getElementById('cancel-auth-modal')?.addEventListener('click', removeModal);
    }

    // Intercept clicks on links pointing to protected pages when not logged in
    document.addEventListener('click', function (e) {
        if (isLoggedIn()) return; // User IS logged in -> allow normal navigation!

        const anchor = e.target.closest('a');
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        if (!href || href === '#' || href.startsWith('javascript:')) return;

        const isProtected = PROTECTED_PAGES.some(page => href.includes(page));
        if (isProtected) {
            e.preventDefault();
            e.stopPropagation();
            showAuthModal(href);
        }
    }, true);

    // Direct page access check if user navigates directly to a protected URL while logged out
    function checkDirectAccess() {
        const path = window.location.pathname;
        const pageName = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
        const urlParams = new URLSearchParams(window.location.search);

        if (!isLoggedIn()) {
            if (urlParams.get('auth_required') === '1') {
                const target = urlParams.get('target') || 'protected page';
                showAuthModal(target);
            } else if (PROTECTED_PAGES.includes(pageName)) {
                // Redirect from protected page to records.html so the modal pops up on records.html
                window.location.href = `records.html?auth_required=1&target=${encodeURIComponent(pageName)}`;
            }
        } else {
            // User IS logged in -> clean up auth_required URL param if present
            if (urlParams.get('auth_required') === '1') {
                const cleanUrl = window.location.pathname;
                window.history.replaceState({}, document.title, cleanUrl);
            }
        }
    }

    function getHeaderHTML() {
        let accountSection = `
            <a href="login.html" class="text-on-surface-variant hover:text-primary transition-colors flex items-center" title="Account / Login">
                <span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
            </a>
        `;

        if (isLoggedIn()) {
            let userName = 'User';
            const u = getCurrentUser();
            if (u && u.full_name) userName = u.full_name.split(' ')[0];
            else if (u && u.email) userName = u.email.split('@')[0];

            accountSection = `
                <div class="flex items-center gap-xs">
                    <a href="dashboard.html" class="flex items-center gap-xs text-on-surface hover:text-primary font-body-bold text-sm bg-surface-container-low px-3 py-1.5 rounded-lg transition-colors" title="My Account">
                        <span class="material-symbols-outlined text-primary text-base">account_circle</span>
                        <span>${userName}</span>
                    </a>
                    <button id="nav-logout-btn" class="text-on-surface-variant hover:text-error transition-colors p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer" title="Log Out">
                        <span class="material-symbols-outlined text-base">logout</span>
                    </button>
                </div>
            `;
        }

        return `
        <header class="bg-surface-container-lowest border-b border-outline-variant fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-md">
            <div class="flex items-center gap-lg">
                <a href="index.html" class="font-display-lg text-display-lg text-primary tracking-tighter hover:opacity-80 transition-opacity">Lemon</a>
                <nav class="hidden md:flex gap-lg ml-xl" id="main-nav">
                    <a class="nav-link text-on-surface-variant font-body-base hover:text-primary transition-colors" data-page="records.html" href="records.html">Browse</a>
                    <a class="nav-link text-on-surface-variant font-body-base hover:text-primary transition-colors" data-page="form.html" href="form.html">Report</a>
                    <a class="nav-link text-on-surface-variant font-body-base hover:text-primary transition-colors" data-page="dashboard.html" href="dashboard.html">Dashboard</a>
                </nav>
            </div>
            <div class="flex items-center gap-md">
                <a href="dashboard.html" class="text-on-surface-variant hover:text-primary transition-colors flex items-center" title="Notifications">
                    <span class="material-symbols-outlined" data-icon="notifications">notifications</span>
                </a>
                ${accountSection}
            </div>
        </header>
        `;
    }

    const FOOTER_HTML = `
    <footer class="bg-surface-container-low w-full py-xxl px-margin-mobile md:px-margin-desktop mt-xxl flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto">
        <div class="mb-lg md:mb-0">
            <a href="index.html" class="font-headline-md text-headline-md text-on-secondary-fixed dark:text-on-secondary mb-sm tracking-tight block hover:opacity-80 transition-opacity">Lemon</a>
            <p class="font-body-base text-body-base text-on-secondary-fixed dark:text-on-secondary text-sm">© 2026 Lemon Smart Campus. All rights reserved.</p>
        </div>
        <nav class="flex flex-wrap gap-md justify-center">
            <a class="font-body-base text-body-base text-on-surface-variant hover:text-primary transition-all focus:ring-2 focus:ring-primary rounded" href="records.html">Campus Map</a>
            <a class="font-body-base text-body-base text-on-surface-variant hover:text-primary transition-all focus:ring-2 focus:ring-primary rounded" href="admin.html">Security Office</a>
            <a class="font-body-base text-body-base text-on-surface-variant hover:text-primary transition-all focus:ring-2 focus:ring-primary rounded" href="#">Privacy Policy</a>
            <a class="font-body-base text-body-base text-on-surface-variant hover:text-primary transition-all focus:ring-2 focus:ring-primary rounded" href="#">Contact Support</a>
        </nav>
    </footer>
    `;

    function renderComponents() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = getHeaderHTML();
            document.getElementById('nav-logout-btn')?.addEventListener('click', function () {
                localStorage.removeItem('lemon_current_user');
                sessionStorage.removeItem('lemon_current_user');
                document.cookie = "lemon_logged_in=; path=/; max-age=0";
                window.location.href = 'index.html';
            });
        }

        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = FOOTER_HTML;
        }

        updateActiveNav();
        checkDirectAccess();
    }

    function updateActiveNav() {
        const path = window.location.pathname;
        const pageName = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

        document.querySelectorAll('#main-nav .nav-link').forEach(link => {
            const targetPage = link.getAttribute('data-page');
            if (targetPage === pageName || (pageName === 'detail.html' && targetPage === 'records.html')) {
                link.className = "nav-link text-primary font-body-bold border-b-2 border-primary pb-1 transition-colors";
            } else {
                link.className = "nav-link text-on-surface-variant font-body-base hover:text-primary transition-colors";
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener("DOMContentLoaded", renderComponents);
    } else {
        renderComponents();
    }
})();
