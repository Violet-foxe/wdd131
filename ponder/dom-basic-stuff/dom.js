//looks at the webdevlist
let selectElem = document.getElementById('webdevlist');

//sees if the webdevlist value changes
selectElem.addEventListener('change', function(){
    //this is the value of the webdevlist
    let codeValue = selectElem.value;
    //just logs it
    console.log(codeValue);
})