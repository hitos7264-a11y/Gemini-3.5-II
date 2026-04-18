/* =========================================================
   Gemini 3.5 大予想 — Main JS
   ナビ、ドロワー、進捗バー、FAQ、スクロールアニメ、検索
   ========================================================= */

(function () {
    'use strict';

    // ---- Drawer ----
    const drawer = document.getElementById('drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const openBtn = document.getElementById('open-drawer');
    const closeBtn = document.getElementById('close-drawer');

    function openDrawer() {
        if (!drawer) return;
        drawer.classList.add('is-open');
        if (drawerOverlay) drawerOverlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
        if (!drawer) return;
        drawer.classList.remove('is-open');
        if (drawerOverlay) drawerOverlay.classList.remove('is-open');
        document.body.style.overflow = '';
    }
    if (openBtn) openBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    // Esc key closes drawer and search
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeDrawer();
            closeSearch();
        }
    });

    // Auto-highlight current drawer link
    const drawerLinks = document.querySelectorAll('.drawer__link');
    const currentPath = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index.html';
    drawerLinks.forEach(function (link) {
        const href = link.getAttribute('href');
        if (!href) return;
        const linkPath = href.replace(/\/$/, '').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('is-current');
        }
    });

    // ---- Reading progress bar ----
    const progressBar = document.getElementById('reading-progress-bar');
    function updateProgress() {
        if (!progressBar) return;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
        progressBar.style.width = Math.min(100, Math.max(0, pct)).toFixed(2) + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    // ---- Back to top ----
    const backToTop = document.getElementById('back-to-top');
    function toggleBackToTop() {
        if (!backToTop) return;
        if ((window.scrollY || document.documentElement.scrollTop) > 480) {
            backToTop.classList.add('is-visible');
        } else {
            backToTop.classList.remove('is-visible');
        }
    }
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---- FAQ accordion ----
    document.querySelectorAll('.faq__q').forEach(function (q) {
        q.addEventListener('click', function () {
            const item = q.closest('.faq__item');
            if (!item) return;
            const isOpen = item.classList.contains('is-open');
            // toggle this one
            item.classList.toggle('is-open', !isOpen);
        });
    });

    // ---- Fade-in on scroll ----
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('is-visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
        document.querySelectorAll('.fade-in').forEach(function (el) { io.observe(el); });
    } else {
        document.querySelectorAll('.fade-in').forEach(function (el) { el.classList.add('is-visible'); });
    }

    // ---- Animate bench bars into view ----
    if ('IntersectionObserver' in window) {
        const barIO = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    const target = e.target;
                    const pct = target.getAttribute('data-pct') || '0';
                    target.style.width = pct + '%';
                    barIO.unobserve(target);
                }
            });
        }, { threshold: 0.3 });
        document.querySelectorAll('[data-pct]').forEach(function (el) {
            el.style.width = '0%';
            barIO.observe(el);
        });
    }

    // Animate confidence fills similarly
    if ('IntersectionObserver' in window) {
        const confIO = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    const fill = e.target.querySelector('.confidence__fill');
                    const pct = e.target.getAttribute('data-conf') || '50';
                    if (fill) fill.style.width = pct + '%';
                    confIO.unobserve(e.target);
                }
            });
        }, { threshold: 0.3 });
        document.querySelectorAll('.confidence').forEach(function (el) {
            const fill = el.querySelector('.confidence__fill');
            if (fill) fill.style.width = '0%';
            confIO.observe(el);
        });
    }

    // ---- Search ----
    const searchBtn = document.getElementById('open-search');
    const searchPanel = document.getElementById('search-panel');
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('close-search');
    const searchResults = document.getElementById('search-results');

    function openSearch() {
        if (!searchPanel) return;
        searchPanel.classList.add('is-open');
        setTimeout(function () { if (searchInput) searchInput.focus(); }, 50);
    }
    function closeSearch() {
        if (!searchPanel) return;
        searchPanel.classList.remove('is-open');
    }
    if (searchBtn) searchBtn.addEventListener('click', openSearch);
    if (searchClose) searchClose.addEventListener('click', closeSearch);

    function renderResults(q) {
        if (!searchResults) return;
        if (!q || q.length < 1) {
            searchResults.innerHTML = '<div class="search-empty">キーワードを入力してください。<br><small>例: Deep Think / Snow Bunny / Ironwood / HLE</small></div>';
            return;
        }
        const lower = q.toLowerCase();
        const hits = (window.SEARCH_INDEX || []).filter(function (it) {
            return (it.title + ' ' + it.body + ' ' + (it.tags || '')).toLowerCase().indexOf(lower) !== -1;
        }).slice(0, 30);
        if (hits.length === 0) {
            searchResults.innerHTML = '<div class="search-empty">該当する項目が見つかりませんでした。</div>';
            return;
        }
        const html = hits.map(function (h) {
            let ex = h.body;
            const idx = ex.toLowerCase().indexOf(lower);
            if (idx > -1) {
                const start = Math.max(0, idx - 30);
                const end = Math.min(ex.length, idx + q.length + 60);
                ex = (start > 0 ? '…' : '') + ex.substring(start, end) + (end < h.body.length ? '…' : '');
                const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
                ex = ex.replace(re, '<mark>$1</mark>');
            }
            return (
                '<a class="search-hit" href="' + h.url + '">' +
                    '<div class="search-hit__chapter">' + h.chapter + '</div>' +
                    '<div class="search-hit__title">' + h.title + '</div>' +
                    '<div class="search-hit__excerpt">' + ex + '</div>' +
                '</a>'
            );
        }).join('');
        searchResults.innerHTML = html;
    }
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            renderResults(searchInput.value.trim());
        });
    }

    // Expose closeSearch globally for ESC
    window.closeSearch = closeSearch;
})();
