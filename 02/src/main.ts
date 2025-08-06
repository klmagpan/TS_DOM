const div = document.querySelector("#app") // Get an element from CSS selector

console.log(div)

const p = document.createElement("p"); // creates paragraph elemet in body

p.textContent = "Welcome to our coffee shop!";

div.append(p);