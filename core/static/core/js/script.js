var clickHandlerActive = false;
var wrap;
var burger_status = false;
var profile_status = false;
const mediaQuery = window.matchMedia('(max-width: 1001px)');
const burger_menu = document.getElementById('burger');
const nav = document.getElementById('nav');
const sibling = nav.nextSibling;
const profile = document.getElementById('profile');
const user_pop = document.getElementById('user-pop');


function profile_clickHandler(event){
    if (profile_status === false && profile.contains(event.target)){  
        user_pop.classList.toggle('user-pop-hidden');
        profile_status = true;
    }
    else if (profile_status === true && !user_pop.contains(event.target)){
        user_pop.classList.toggle('user-pop-hidden');
        profile_status = false;
    }
}


function clickHandler(event) {
    if (clickHandlerActive && burger_menu.contains(event.target) && burger_status === false) {
        wrap.className = 'burger-wrap-revealed';
        nav.classList.toggle('burger-nav-revealed');
        nav.classList.toggle('burger-nav-hidden');
        burger_status = true;
    } 
    else if (clickHandlerActive && burger_status === true && !nav.contains(event.target)) {
        nav.classList.toggle('burger-nav-revealed');
        nav.classList.toggle('burger-nav-hidden');
        wrap.className = 'burger-wrap-hidden';
        burger_status = false;
    }
}


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
    } 
    else if (!res.matches) {
        if (wrap) {
            burger_menu.insertAdjacentElement('afterend', nav);
            wrap.remove();
            wrap = null;
            burger_status = false;
        }
        nav.removeAttribute('class');
        nav.setAttribute('id', 'nav');
        clickHandlerActive = false;
    }
}


document.addEventListener('click', clickHandler);
document.addEventListener('click', profile_clickHandler);
handle(mediaQuery)
mediaQuery.addEventListener('change', function() { handle(this, burger_menu); });
