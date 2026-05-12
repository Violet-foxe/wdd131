let menu_btn = document.querySelector(".menu-btn");
let nav = document.querySelector("nav");

menu_btn.addEventListener("click", changeMenu);

function changeMenu(){
    // hides the nav on or off
    nav.classList.toggle('hide');

    // changes button look
    menu_btn.classList.toggle('change');
}