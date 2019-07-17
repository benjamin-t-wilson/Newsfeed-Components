/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const menuBtn = document.querySelector(".menu-button");
const header = document.querySelector(".header");
function menuMaker(arr) {
  let house = document.createElement("div");
  house.classList.add("menu");
  header.appendChild(house);
  let list = document.createElement("ul");
  house.appendChild(list);
  arr.forEach(cv => {
    let item = document.createElement("li");
    item.textContent = cv;
    list.appendChild(item);
  });
}
menuMaker(menuItems);
// menuBtn.addEventListener("click", () => {
//   let menu = document.querySelector(".menu");
//   menu.classList.toggle("menu--open");
// });
var pos = -350;
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  menu.classList.add("menu--open");
  if (pos < 1) {
    var id = setInterval(() => {
      if (pos < 1) {
        pos++;
        menu.style.left = pos + "px";
      } else {
        clearInterval(id);
      }
    });
  }
});

menuBtn.addEventListener("click", () => {
  if (pos == 1) {
    var id = setInterval(() => {
      if (pos > -350) {
        pos--;
        menu.style.left = pos + "px";
      } else {
        clearInterval(id);
        menu.classList.remove("menu--open");
      }
    });
  }
});

const body = document.querySelector("body")
body.addEventListener("click", () => {
  if (pos == 1) {
    var id = setInterval(() => {
      if (pos > -350) {
        pos--;
        menu.style.left = pos + "px";
      } else {
        clearInterval(id);
        menu.classList.remove("menu--open");
      }
    });
  }
})