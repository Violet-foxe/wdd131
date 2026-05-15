const grid = document.querySelector("#grid");
const modal = document.querySelector("dialog");
const modalImg = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

// console.log("error 1");
// event listener
grid.addEventListener('click', openModal);
function openModal(e) {
    // console.log("openModal running");
    // looks for the image target
    let imgSrc = e.target.src;
    // console.log(imgSrc);
    if (imgSrc != null){       
        // change the src in the img src
        modalImg.src = imgSrc.replace("-sm.", "-full.");
        // showModal function is built in
        modal.showModal();
        return
    };
};

// mini function to close if clicking outside the image
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    };
});

// mini function to close if button click
closeButton.addEventListener('click', closeWithButton);

function closeWithButton() {
    // console.log("button close try");
    modal.close();
    // console.log("button close done");
};