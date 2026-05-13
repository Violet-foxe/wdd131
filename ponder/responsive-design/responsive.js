let menuButton = document.querySelector(".menu-btn");
let nav = document.querySelector("nav");

menuButton.addEventListener("click", changeMenu);

function changeMenu(){
    // hides the nav on or off
    nav.classList.toggle('hide');

    // changes button look
    menuButton.classList.toggle('change');
}