const switchBtn = document.querySelector('#switch');
const r = document.querySelector(':root');

if(!localStorage.getItem('theme')) {
    localStorage.setItem('theme' , 'dark');
}

if(localStorage.getItem('theme') === 'dark') {
    switchBtn.click();
    themeChanger(localStorage.getItem('theme'))
}else {
    themeChanger(localStorage.getItem('theme'))
}

switchBtn.addEventListener('click' , e=> {
    if(switchBtn.checked) {
        localStorage.setItem("theme", `dark`);
    }else {
        localStorage.setItem("theme", `light`);
    }
    themeChanger(localStorage.getItem("theme"));
})


function themeChanger(conditon) {
    if(conditon === "dark") {
        
        r.style.setProperty('--bg', 'hsl(230, 17%, 14%)');
        r.style.setProperty('--top-bg-pattern', 'hsl(232, 19%, 15%)');
        r.style.setProperty('--blue-card-bg', 'hsl(228, 28%, 20%)');
        r.style.setProperty('--blue-text', 'hsl(228, 34%, 66%)');
        r.style.setProperty('--text', 'hsl(0, 0%, 100%)');
        
    }else if(conditon === 'light') {
       
        r.style.setProperty('--bg', 'hsl(0, 0%, 100%)');
        r.style.setProperty('--top-bg-pattern', 'hsl(225, 100%, 98%)');
        r.style.setProperty('--blue-card-bg', 'hsl(227, 47%, 96%)');
        r.style.setProperty('--blue-text', 'hsl(228, 12%, 44%)');
        r.style.setProperty('--text', 'hsl(230, 17%, 14%)');
    }
}
