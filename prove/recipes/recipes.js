// this is where the recipe info comes from
import { recipes } from "./recipes-info.js"
// console.log(recipes);
const recipeContainer = document.getElementById("recipe-container");

function sendHTML(recipeList) {
  recipeContainer.innerHTML = "";
  let card;
  recipeList.forEach(recipe => {
    // make and send the card
    card = makeHTML(recipe);
    recipeContainer.innerHTML += card;
  });
}
function makeHTML(recipe) {
    const tags = makeTags(recipe.tags);
    const stars = makeStars(recipe.rating, 5, "⭐", "☆");

    const card = `
        <div class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}" fetchpriority=high>
            <div class="info">
                <div class="tag-list">
                ${tags}
                </div>
                <h2>${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                ${stars}
                </span>
                <p class="desc">${recipe.description}</p>
            </div>
        </div>
    `
    return card;
}
function sortName(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()){
        return -1;
    }
    else if (a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
    }
    else {
        return 0;
    }
}

function makeTags(tagList) {
    let allTags = "";
    tagList.forEach(tag => {
        allTags += `<button class="tag">${tag}</button>`
    });
    return allTags;
}
function makeStars(rating, outof, symbol, empty){
    let part = 1
    let string = "";

    // loop for the number of times in outof
    while (part <= outof) {
        if (part <= rating) {
            string += `<span aria-hidden="true" class="icon-star">${symbol}</span>`;
        }
        else {
            string += `<span aria-hidden="true" class="icon-star-empty">${empty}</span>`;
        }
        part += 1;
    }
    return string;
}

function Search() {
    // console.log("You pressed the search Button!");

    // get string from search bar
    const searchString = document.getElementById("search-bar").value.toLowerCase();
    // console.log(searchString);

    // get info from recipes
    const filteredRecipes = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(searchString) ||
            recipe.author.toLowerCase().includes(searchString) ||
            recipe.cookTime.toLowerCase().includes(searchString) ||
            recipe.description.toLowerCase().includes(searchString) ||

            recipe.recipeIngredient.find(ing => ing.toLowerCase().includes(searchString)) ||
            recipe.tags.find(tag => tag.toLowerCase().includes(searchString))
        )
    })
    filteredRecipes.sort(sortName);
    // console.log(filteredRecipes);
    sendHTML(filteredRecipes);
};

// when click on search button
const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", Search);

// when press enter key from search bar
const search = document.getElementById("search-bar");
search.addEventListener("keypress", event =>{
    if (event.key === "Enter") {
        Search();
    }
});


// on page load
// pick random recipe 
// (the function runs on being sent an array, so i put the recipe into an array on its own)
const randomRecipe = [];
randomRecipe.push(recipes[Math.floor(Math.random() * recipes.length)])

sendHTML(randomRecipe);