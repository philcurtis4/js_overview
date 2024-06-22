window //used to interact with the window
document // used to interact with the html 

// When the page loads, show a button that the user clicks
//When the button is clicked, show a prompt for the first name, lastname, and age
//Store the 3 values to an object
//Print the data object values to the browser window

// const gatherBtn = document.getElementById("gather-button")
// can use but query selector allows you to grab any type of css selector

const gatherBtn = document.querySelector("#gather-button");
const h1 = document.querySelector('h1');

console.log(gatherBtn);
console.log(gatherBtn.innerText);

function gatherInfo (){
    const firstName = prompt('Please enter your first name.');

    console.log(firstName);
}

gatherBtn.addEventListener('click', gatherInfo);