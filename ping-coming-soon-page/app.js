const FORM = document.querySelector('form');
const FORM__INPUT = document.querySelector('.email-input');
const SMALL__TEXT = document.querySelector('.error-msg');

FORM.addEventListener('submit' , e=> {
    if(!FORM__INPUT.value.trim()) {
        e.preventDefault()
    }
})
FORM__INPUT.addEventListener('keyup' , e=> {
    console.log(FORM__INPUT.value.trim())
    ValidateEmail(FORM__INPUT.value.trim())
})
 function ValidateEmail(mail) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    FORM__INPUT.classList.remove('error-border')
    SMALL__TEXT.classList.add('hide');
 } else {
    FORM__INPUT.classList.add('error-border')
    SMALL__TEXT.classList.remove('hide');
    
 }

} 