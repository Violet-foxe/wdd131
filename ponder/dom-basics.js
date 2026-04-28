
//to change DOM, use document

// let selectElem = document.getElementById("webdevlist");
// selectElem.addEventListener("change", function(){
//     let codeValue = selectElem.value;
//     console.log(codeValue);
// })

console.log(document);
let firstList = document.querySelector(".list"); 
//query selector can select anything, 
// but only returns one element (the first)
firstList.style.backgroundColor = "cornsilk";

let content = document.getElementById("content");
content.style.color = "darkslategray";

// document.querySelector("img")
//         .setAttribute("src", "portrait.png");
document.querySelector("img")
        .setAttribute("alt", "new alt tag, life");

document.querySelector('h1')
        .textContent = "NEW TITLE :)";

let headingText = document.querySelector('h1')
        .textContent;
console.log(headingText);

// make suer to not put ".something", just put "something"
firstList.className = "new-list";

// to change all, you'd have to loop through it
document.querySelectorAll("ul")[1]
        .style.backgroundColor = "pink";