// /*
//   To complete these exercises use vscode-live-server plugin to get live updates of your changes.
//   - Install the Live Server plugin
//   - Right click on index.html and select "Open with Live Server"
// */

// /*
// Task 1
// =======

// Write JavaScript below that console.logs:
//     1. all the "p" element nodes of the document,
//     --> should log a list of nodes with a length of 6

//     2. the first div element node
//     --> should log the ".site-header" node

//     3. the element with id "jumbotronText"
//     --> should log the "#jumbotronText" node

//     4. all the "p" elements of contained inside the .primary-content element node
//     --> should log a list of nodes with a length of 3

// */
// let h1Elements = document.querySelectorAll("h1");
// console.log(h1Elements);

// let firstDiv = document.querySelector("div");
// console.log(firstDiv);

// let elementWithId = document.querySelector("#jumbotronText");
// console.log(elementWithId);

// let containedInside = document.querySelector(".primary-content p");
// console.log(containedInside);
// /*
// Task 2
// ======

// When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
// */
// const whenClicked = document.querySelector("#alertBtn");

// whenClicked.addEventListener("click", () => {
//   alert("Thanks for visiting Bikes for Refugees!");
// });
// // alert("Thanks for visiting Bikes for Refugees!");

// /*
// Task 3
// =======

// When a user clicks the 'Change colour' button, the background colour of the page should change to red.
// Hint: can you do this with a CSS class instead of adding styles to the element?
// */
// const changeColor = document.querySelector(".btn.btn-primary.btn-lrg");

// changeColor.addEventListener("click", () => {
//   let mainBody = document.querySelector("body");
//   mainBody.style.backgroundColor = "red";
// });

// /*
// Task 4
// ======

// When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
// */
// const largerLinks = document.querySelector(".btn.btn-secondary.btn-lrg");

// largerLinks.addEventListener("click", () => {
//   let allLinks = document.querySelectorAll("a");
//   for (let i = 0; i < largerLinks.length; i++) {
//     allLinks[i].style.fontSize = "x-large";
//   }
// });

// const largerLinksElement = document.querySelector("#largerLinksBtn");
// largerLinksElement.addEventListener("click", () => {
//   const aTagList = document.querySelectorAll("a");
//   aTagList.forEach((tag) => {
//     let val = Number(tag.style.fontSize.replace("em", ""));
//     val += 0.5;

//     tag.style.fontSize = `${val}em`;
//   });
// });
// /*
// Task 5
// ======

// When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
// Hint: the new paragraph should be appended to the element with id 'addArticle'.
// */
// const addTextElement = document.querySelector("#addArticleBtn");
// addTextElement.addEventListener("click", () => {
//   const paragraphElement = document.createElement("p");

//   const textInput = document.querySelector("#addArticleInput");
//   const inputValue = textInput.value;

//   paragraphElement.innerText = inputValue;

//   const mainArticlesElement = document.querySelector("#addArticle");
//   mainArticlesElement.appendChild(paragraphElement);
// });


let printValuesOf = (jsObject, keys) => {
  for (let i = 0; i <= keys.length; i++) {
    let key = keys[i];
    console.log(jsObject[k]);
  }
}

let simpsonsCatchphrases = {
  lisa: 'BAAAAAART!',
  bart: 'Eat My Shorts!',
  marge: 'Mmm~mmmmm',
  homer: 'd'oh!',
  maggie: '(Pacifier Suck)',
};

printValuesOf(simpsonsCatchphrases, 'lisa', 'bart', 'homer');

// Expected console output:

// BAAAAAART!
// Eat My Shorts!
// d'oh!

// Returns undefined