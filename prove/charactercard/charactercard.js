// make the character
const charactercard = {
    imgSrc: 'snortleblat.png',
    imgAlt: 'crocodilian-like lizard folk in a swamp',
    name: "Snortleblat",
    chClass: 'Swamp Beast Diplomat',
    level: 5,
    maxHP: 100,
    health: 100
}

// find the button info
const attackButton = document.getElementById("attackButton");
const levelButton = document.getElementById("levelButton");
const healButton = document.getElementById("healButton");

// listen for the buttons
attackButton.addEventListener("click", Attacked);
levelButton.addEventListener("click", LevelUp);
healButton.addEventListener("click", Heal);

// use attacked button
function Attacked() {
    charactercard.health = charactercard.health - 20;
    // update the card
    UpdateCard();
    if (charactercard.health <= 0){
        // makes it so that the health will reach 0 again, 
        // and won't go below.
        charactercard.health = 20;

        OpenPopup();
    }
}
// use level up button
function LevelUp() {
    // level up
    charactercard.level = charactercard.level + 1;

    // math to find the current ratio of health
    let hpRatio = charactercard.health / charactercard.maxHP;
    // higher the max hp
    charactercard.maxHP = charactercard.level *20;
    // apply the health ratio
    charactercard.health = Math.round(hpRatio * charactercard.maxHP);

    // update the card
    UpdateCard()
}
// use heal button
function Heal() {
    // health is based on level
    maxHP = charactercard.level * 20;
    
    // if low, add 20hp
    if (charactercard.health < maxHP){
        charactercard.health = charactercard.health + 20;
    }

    // if the HP is too high, resets to the max
    if (charactercard.health > maxHP){
        charactercard.health = maxHP;
    }

    UpdateCard();
}

// update the card
function UpdateCard() {
    // make html
    card =
        `
        <img class="image" src="${charactercard.imgSrc}" alt="${charactercard.imgAlt}">
        <p class="name">${charactercard.name}</p>
        <div class="stats">
            <p><b>Class:</b> ${charactercard.chClass}</p>
            <p><b>Level:</b> ${charactercard.level}</p>
            <p><b>Health:</b> ${charactercard.health}/${charactercard.maxHP}</p>
        </div>
        `
    // attaches html to document
    document.querySelector(".cardInfo").innerHTML = card;
}
// run it at least initally
UpdateCard()

// FOR POP UP WINDOW
// Select elements from the DOM
const popup = document.getElementById('deathPopup');
const openBtn = document.getElementById('openPopup');
const closeBtn = document.getElementById('closePopup');

// Open the popup as a modal overlay when clicking the trigger button
function OpenPopup() {
    popup.showModal();
}

// Close the popup window when clicking the close button
closeBtn.addEventListener('click', () => {
    popup.close();
});