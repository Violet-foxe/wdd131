// Javascript arrays
// collection of elements, more than one value
let names = ["Jarrokoz", "Violet", "Rosa", "Xavier", "Tristan", "Nathan"];
console.log(names);
// console.log(names[4]);
// console.log(names[6]);
// console.log(names[names.length-1]);

let ages = [25, 15, 14, 15, 15, 16];
console.log(ages);

let mixArray = ["Jarrokoz", 25, "Violet", 15, "Rosa", 14, "Xavier", 15, "Tristan", 15, "Nathan", 16];
console.log(mixArray);

let thisIndex = 0;
console.log(names[thisIndex]);
console.log(mixArray[thisIndex*2]);
console.log(mixArray[thisIndex*2+1]);

// javascript objects
let student = {
    name : "Jake",
    class : "MATH106",
    grade : "B-",
    age : 27
}

console.log(student);
console.log(student.name);
console.log(student.class);
console.log(student.grade);
console.log(student.age);

// array methods
names.forEach((name) => {
    // this code executes once per each item in the array
    console.log(name);
})

let charBook = names.map((name) =>{
    // returns an entirely new array
    // don't have the index
    return name + " Chained Fate";
})
console.log(charBook);

// filter unction returns a new array with filtered values
let filteredArray = names.filter((name) => {
    // filter returns boolean, True keep, false don't keep
    return name.includes("i");
    // .includes looks if it has it anywhere in the array
})
console.log(filteredArray);

// reduce                     
const numbers = [125, 50, 20, 5];
// it does a function until an array is reduced to one value
document.getElementById("output").innerHTML = numbers.reduce(myFunc);
function myFunc(total, num) {
    // console.log("total", total);
    // console.log("num", num);
    // console.log("sub", total-num);
    return total - num;
}

// indexOf
// returns index of the value given (first if there is multiple)
nameIndex = names.indexOf("Tristan");
console.log("Tristan is index", nameIndex);

// Template Literals
// special string that allows a whole lot.
// ` is for the full string
// $ is for variables
let index;
names.forEach((name) => {
    index = names.indexOf(name);
    let pageDesc = `
        <div class="full-desc">
            <hr>
            <h3>name: ${names[index]}</h3>
            <p>age: ${ages[index]}</p>
        </div>
    `;
    document.getElementById("desc").innerHTML += pageDesc;
})
// console.log(names);