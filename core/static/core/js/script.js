let clickHandlerActive = false;
let wrap;
let burger_status = false;
let profile_status = false;
const mediaQuery = window.matchMedia('(max-width: 1001px)');
const burger_menu = document.getElementById('burger');
const nav = document.getElementById('nav');
const profile = document.getElementById('profile');
const user_pop = document.getElementById('user-pop');
const auth_phone = document.getElementById('auth-phone');
const auth_email = document.getElementById('auth-email');
const signup_btn = document.getElementsByClassName('signup-btn');
const auth_section = document.getElementsByClassName('auth-inner-section');


window.onload = function() {
    let buttons = document.getElementsByTagName('button');
    if (buttons){
        for (let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', function(event){
                event.preventDefault();
            });
        }
    }
}

function profile_clickHandler(event){
    if (profile){
        if (profile_status === false && profile.contains(event.target)){  
            user_pop.classList.toggle('user-pop-hidden');
            profile_status = true;
        }
        else if (profile_status === true && !user_pop.contains(event.target)){
            user_pop.classList.toggle('user-pop-hidden');
            profile_status = false;
        }
    }
}

function auth_btn_clickHandler(event){
    if(auth_phone){
        if (auth_phone.contains(event.target) || auth_email.contains(event.target)){
            auth_phone.classList.toggle('auth-option-active');
            auth_email.classList.toggle('auth-option-active');
        }
    }
}

function signup_btn_clickHandler(event){
    if (signup_btn){
        if (signup_btn[0].contains(event.target)){
            for (let i = 0; i < auth_section.length; i++){
                auth_section[i].classList.toggle('auth-inner-section-hidden');
            }
        }
    }
}
function clickHandler(event) {
    if(burger_menu){
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
    
}

function handle(res) {
    if (nav){

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
}

document.addEventListener('click', signup_btn_clickHandler)
document.addEventListener('click', auth_btn_clickHandler)
document.addEventListener('click', clickHandler);
document.addEventListener('click', profile_clickHandler);
handle(mediaQuery)
mediaQuery.addEventListener('change', function() { handle(this, burger_menu); });
