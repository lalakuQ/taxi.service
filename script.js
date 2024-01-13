var clickHandlerActive = false;
var wrap;
var burger_status = false;
const mediaQuery = window.matchMedia('(max-width: 1001px)')
const burger_menu = document.getElementById('burger')
const nav = document.getElementById('nav');
const sibling = nav.nextSibling;

function clickHandler(event) {
    if (clickHandlerActive && burger_menu.contains(event.target) && burger_status === false) {
        wrap.className = 'burger-wrap-revealed';
        nav.classList.toggle('burger-nav-revealed');
        nav.classList.toggle('burger-nav-hidden');
        burger_status = true;
    } else if (clickHandlerActive && burger_status === true && !nav.contains(event.target)) {
        nav.classList.toggle('burger-nav-revealed');
        nav.classList.toggle('burger-nav-hidden');
        wrap.className = 'burger-wrap-hidden';
        burger_status = false;
    }
}

document.addEventListener('click', clickHandler);

function handle(res) {
    if (res.matches) {
        if (!wrap) {
            wrap = document.createElement('div');
            nav.parentNode.insertBefore(wrap, nav);
            wrap.appendChild(nav);
        }
        wrap.className = 'burger-wrap-hidden';
        nav.className = 'burger-nav-hidden';
        nav.removeAttribute('id');
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
handle(mediaQuery)
mediaQuery.addEventListener('change', function() { handle(this, burger_menu); });
