const hamburger = document.querySelector('.hamburger')
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const mobileLinks =document.querySelector('.mobileLinks')

hamburger.addEventListener('click' , e=> {
    open.classList.toggle('hide');
    close.classList.toggle('hide');

    mobileLinks.classList.toggle('hide')
})

window.addEventListener('resize' , e=> {
    const w = 850;

    if(document.body.clientWidth > w) {
        mobileLinks.classList.add('hide')

        open.classList.remove('hide');
        close.classList.add('hide');
    }
}) 