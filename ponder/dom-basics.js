
//to change DOM, use document

// let selectElem = document.getElementById("webdevlist");
// selectElem.addEventListener("change", function(){
//     let codeValue = selectElem.value;
//     console.log(codeValue);
// })

const html = document.querySelector("#html")
const css = document.querySelector("#css")
const js = document.querySelector("#js")
// drop down
const dropdown = document.querySelector("#webdevlist");

dropdown.addEventListener("change", function(){//listen for something to happen to the element
    html.style.color = "black";
    css.style.color = "black";
    js.style.color = "black";
    
    let codeValue = dropdown.value;
    console.log(codeValue);
    document.getElementById(codeValue)
            .style.color = "red";
}); 