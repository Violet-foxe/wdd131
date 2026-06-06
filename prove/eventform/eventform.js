// get info
const form = document.querySelector("#eventForm");
const output = document.querySelector("#output");

const personType = document.querySelector("#personType");
const idContainer = document.querySelector("#idContainer");
const codeContainer = document.querySelector("#codeContainer");
const id = document.querySelector("#id");
const code = document.querySelector("#code");

// hide id container
idContainer.hidden = true;
// make id not required
id.required = false;
// hide code container
codeContainer.hidden = true;
// make code not required
code.required = false;

function updateIDField() {
    // console.log("updating ID field");
    const value = personType.value;

    // check the value to see what shows
    if (value === "student") {
        // student id

        // show id container
        idContainer.hidden = false;
        // make id required
        id.required = true;
        // hide code container
        codeContainer.hidden = true;
        // make code not required
        code.required = false;
        // console.log("student");

    } else if (value === "guest") {
        // guest code

        // hide id container
        idContainer.hidden = true;
        // make id not required
        id.required = false;
        // show code container
        codeContainer.hidden = false;
        // make code required
        code.required = true;
        // console.log("guest");
    } else {
        // neither

        // hide id container
        idContainer.hidden = true;
        // make id not required
        id.required = false;
        // hide code container
        codeContainer.hidden = true;
        // make code not required
        code.required = false;
        // console.log("neither");
    }

};

updateIDField();
// listen for type choice
personType.addEventListener("change", updateIDField);

// look for date
function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
};

// form submit button
form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";
    console.log("button press");

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.personType.value;
    const theDate = form.date.value;
    const theID = form.id.value.trim();
    const theCode = form.code.value.trim();

    // validate the input
    if (type === "student" && theID.length !== 9) {
        output.textContent = "Student ID must be 9 digits";
        return;
    }
    if (type === "guest" && theCode !== "EVENT131") {
        output.textContent = "That is not the correct Access Code.";
        return;
    }
    // checks if the date works
    if (isPastDate(theDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    // output
    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${email}</p>
    <p>${type}</p>
    <p>${theDate}</p>
    `;

    form.reset();
    updateIDField();
});
