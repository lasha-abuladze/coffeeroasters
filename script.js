`use strict`;


const mainSectionHeader = document.querySelector(`.main-section--header`);
const menuBtn = document.querySelectorAll(`.menu-btn`);
const navList = document.querySelector(`.nav-list`);
const li = document.querySelectorAll(`.li`);

const navigationBackground = document.querySelector(`.navigation-background`);



mainSectionHeader.addEventListener(`click`, (e) => {

    if(e.target.closest(`.menu-btn`)) {
        menuBtn.forEach(el => el.classList.toggle(`display-none`));
        navigationBackground.classList.toggle(`navigation-background--active`)
        navList.classList.toggle(`nav-list--active`);
        li.forEach(el => el.classList.toggle(`li-active`))
    }
})