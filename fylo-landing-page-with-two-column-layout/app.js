const FORM = document.querySelector('.hero-input');
const FORM__INPUT = document.querySelector('.hero-input input');
const SMALL__TEXT = document.querySelector('.hero-input small');

const FORM_2 = document.querySelector('.ga-form');
const FORM__INPUT_2 = document.querySelector('.ga-form input');
const SMALL__TEXT_2 = document.querySelector('.ga-form small');

function validatorSetter(form, input , small) {
    form.addEventListener('submit' , e=> {
        if(!input.value.trim()) {
            e.preventDefault()
        }
    })
    input.addEventListener('keyup' , e=> {
        console.log(input.value.trim())
        ValidateEmail(input.value.trim())
    })
     function ValidateEmail(mail) {
     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        input.classList.remove('error-border')
        small.classList.add('hide');
     } else {
        input.classList.add('error-border')
        small.classList.remove('hide');
        
     }
    
    } 
}

validatorSetter(FORM  , FORM__INPUT ,SMALL__TEXT);
validatorSetter(FORM_2  , FORM__INPUT_2 ,SMALL__TEXT_2);
