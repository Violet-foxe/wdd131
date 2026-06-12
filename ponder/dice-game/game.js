// when button is clicked 
document.getElementById("rollButton").addEventListener("click", ChangeDie);

// retreive list of checkbockes
const checkboxes = document.querySelectorAll("#gameboard input");
// get list of images
const images = document.querySelectorAll("#gameboard img");

// changes the die color when needed
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", e => {
        // makes it into a javascript array
        const image = Array.from(images).find(
            // finds the one specific dice that is being affected.
            img => img.className === checkbox.className
        );
        // doesn't change the images that aren't being currently activated
        if (!image) return;

        // looks at the specific image checked state
        if (checkbox.checked) {
            // when box is unchecked
            // console.log("white to cyan");
            ChangeDieColor(image, "white", "cyan");
        } else {
            // when box is checked
            // console.log("cyan to white");
            ChangeDieColor(image, "cyan", "white");
        }
    })
})

function ChangeDieColor(image, prevColor, newColor) {
    image.src = image.src.replace(prevColor, newColor);
}

function ChangeDie() {
    // change die images to gif animation
    // change source
    images.forEach(image => {
        if (isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });

    // timer
    // wait 1 sec then call the anonymous function
    setTimeout(() => {
        images.forEach(image => {
            if (isDieUnlocked(image)) {
                image.src = "assets/white_dice_" +
                    Math.ceil(Math.random() * 6) +
                    ".gif";
            }
        });
    }, 1000);
}

function isDieUnlocked(dieImage) {
    // filter out the checked
    const unchecked = Array.from(checkboxes)
        .filter(checkbox => !checkbox.checked);

    // compare list to dieImage
    const result = unchecked.find((unchecked =>
        unchecked.className === dieImage.className))

    // if there's a match, return true;
    return result;
}