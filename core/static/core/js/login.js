const auth_phone = document.getElementById('auth-phone');
const auth_email = document.getElementById('auth-email');

window.onload = function() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(event){
            event.preventDefault();
        });
    }
}
function auth_btn_clickHandler(event){
    if (auth_phone.contains(event.target) || auth_email.contains(event.target)){
        auth_phone.classList.toggle('auth-option-active');
        auth_email.classList.toggle('auth-option-active');
    }
}
document.addEventListener('click', auth_btn_clickHandler)