var clickHandlerActive = false;
const mediaQuery = window.matchMedia('(max-width: 1001px)')
const burger_menu = document.getElementById('burger')
const nav = document.getElementById('nav');
const sibling = nav.nextSibling;
var wrap;
var burger_status = false;

function clickHandler(event) {
    if (clickHandlerActive && burger_menu.contains(event.target) && burger_status === false) {
        wrap.className = 'burger-wrap-revealed';
        nav.className = 'burger-nav-revealed';
        burger_status = true;
    } else if (clickHandlerActive && burger_status === true && !nav.contains(event.target)) {
        nav.className = 'burger-menu-hidden';
        wrap.className = 'burger-menu-hidden';
        burger_status = false;
    }
}

document.addEventListener('click', clickHandler);

function handle(res, obj) {
    if (res.matches) {
        if (!wrap) {
            wrap = document.createElement('div');
            nav.parentNode.insertBefore(wrap, nav);
            wrap.appendChild(nav);
        }
        wrap.className = 'burger-menu-hidden'
        nav.className = 'burger-menu-hidden'
        clickHandlerActive = true;
    } else if (!res.matches) {
        if (wrap) {
            burger_menu.insertAdjacentElement('afterend', nav);
            wrap.remove();
            wrap = null;
            burger_status = false;
        }
        nav.className = 'nav';
        clickHandlerActive = false;
    }
}

mediaQuery.addEventListener('change', function() { handle(this, burger_menu); });
