'use strict';

const navToggle = document.querySelector('#navToggle');
const mobileLinks = document.querySelector('#mobileLinks');
const navIcon = document.querySelectorAll(".navIcon");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const body = document.querySelector('body')

navToggle.addEventListener('click' , e=> {
    body.classList.toggle('stop-scrolling')
    mobileLinks.classList.toggle('open');
    navIcon.forEach((icon) => {
        icon.classList.toggle("hidden");
      });
})

window.addEventListener("resize", () => {
      if (document.body.clientWidth > 850) {
        body.classList.remove('stop-scrolling')
        mobileLinks.classList.remove('open')
        navIcon.forEach((icon) => {
            icon.classList.remove("hidden");
          });
        navOpenIcon.classList.add("hidden");
      }
    });
