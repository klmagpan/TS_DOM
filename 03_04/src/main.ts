const h1 = document.querySelector("h1"); // Select h1 element
h1.textContent = "Pluralsight";

// const body = document.querySelector("body");
const body = document.body;
// body.style.backgroundColor = "black";
// body.style.color = "green";

console.log(document.childNodes); // NodeList(2) <!DOCTYPE html> and html

/* Walks down DOM tree and its child nodes using recursion */
// walkNode(document);
// function walkNode(node: Node) {
// 	console.log(node.nodeName);

// 	if (node.hasChildNodes) {
// 		for (const childNode of node.childNodes) {
// 			walkNode(childNode);
// 		}
// 	}
// }

/* Simpler Treewalker method to traverse through tree */
const treeWalker = document.createTreeWalker(
	document,NodeFilter.SHOW_ELEMENT
);

let node = treeWalker.nextNode();

while(node) {
	// sets backgroundColor of p and h1 elements
	// if (node instanceof HTMLParagraphElement) {
	// 	node
	// 	.style.backgroundColor = "#CCC";
	// }

	if (node instanceof HTMLHeadingElement) {
		node.style.backgroundColor = "white";
	}
	console.log(node.nodeName);
	node = treeWalker.nextNode();;
}

/* HTML Elements Practice*/
// Instead of type HTMLElement, it is type HTMLDivElement using as
const element = document.querySelector("#app") as HTMLDivElement;
//  const element = document.querySelector<HTMLDivElement>("#app"); // Equivalent

const div = document.querySelector("div");
console.log(div.childNodes); // returns all child nodes includes text nodes for whitespace
console.log(div.children); // Just returns HTML elements

// getElementByID (div label)
const shopElement = document.getElementById("shops");
shopElement.style.backgroundColor = "Green";


// getElementByTagName (type of HTML tag)
const elements = document.getElementsByTagName("p");

let count = 1
for (const element of elements) {
	element.textContent = 
		`${count++}. ${element.textContent}`;
}

// getElementsByClassName (type of class of tag, ie. list-item)

// document.querySelector() Grabs a single element by a CSS selector
const divQuery = document.querySelector("div"); // does the first instance of div tag
const pQuery = document.querySelector("p"); // does the first instance of p tag
const idQuery = document.querySelector<HTMLDivElement>("#coffees");
const chainedQuery = document.querySelector<HTMLElement>(
	"#shops .list-item"); // of div ID and tag

// document.querySelectorAll(); Gets multiple elements by a CSS Selector

/* Query from a Child Element*/
const coffeesDiv = document.querySelector("#coffees");
const childQuery = coffeesDiv.querySelectorAll("p");

for (const element of childQuery) {
	element.style.backgroundColor = "#ABC";
}






