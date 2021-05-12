const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('keyup' , e=> {
        const currentElement = e.target;
        const parent = e.target.parentElement;
        const icon = parent.querySelector('img');
        const small = parent.querySelector('small');

        if(!e.target.value.trim()) {
            icon.classList.remove('hide')
            small.classList.remove('hide')
        } else {
            icon.classList.add('hide')
            small.classList.add('hide')
        }
        
    })
})

