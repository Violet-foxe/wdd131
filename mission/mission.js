//variables for the dropdown id and the body element
let dropdown = document.querySelector("#dropdown");
let pageContent = document.querySelector("body");
let image = document.querySelector("img");

//constantly looks for any change in the dropdown, to then do the changetheme function
dropdown.addEventListener("change", changeTheme);

//said function
function changeTheme(){
    //looks at the current value in the dropdown
    let current = dropdown.value;

    //evaluates and changes things based on the value
    if (current === "light"){
        //change background color
        pageContent.style.backgroundColor = "white";
        //change font color
        pageContent.style.color = "black";
        //change logo
        image.setAttribute("src", "byui-logo-blue.webp");

        console.log("light mode activated");
    }
    else if (current === "dark"){
        //change background color
        pageContent.style.backgroundColor = "black";
        //change font color
        pageContent.style.color = "white";
        //change logo
        image.setAttribute("src", "byui-logo-white.png");

        console.log("dark mode activated");
    }
    else{
        //change background color
        pageContent.style.backgroundColor = "white";
        //change font color
        pageContent.style.color = "black";
        //change logo
        image.setAttribute("src", "byui-logo-blue.webp");

        console.log("default mode activated");
    }
}
