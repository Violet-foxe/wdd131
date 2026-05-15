const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);


function openModal(e) {
    // Code to show modal  - Use event parameter 'e'
    let imgSrc = e.target.src;

    
    if (imgSrc == null){
        return
    }
    // select img tag inside dialog, give it src
    modalImg.src = imgSrc.replace("-sm.jpg", "-full.jpg")
    // console.log(modalImg.src);
    modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});