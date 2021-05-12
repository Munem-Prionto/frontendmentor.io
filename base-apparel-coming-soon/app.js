const FORM = document.querySelector('form');
const FORM__INPUT = document.querySelector('.input');
const SMALL__TEXT = document.querySelector('small');
const ERROR__ICON = document.querySelector('.error-icon')

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
    FORM.classList.remove('error');
    SMALL__TEXT.classList.add('hide');
    ERROR__ICON.classList.add('hide');
 } else {
    FORM.classList.add('error');
    SMALL__TEXT.classList.remove('hide');
    ERROR__ICON.classList.remove('hide');
 }

} 