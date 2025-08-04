const itemInput = document
	.querySelector<HTMLInputElement>("#itemInput");
const addButton = document.querySelector("#addButton");
const list = document.querySelector("#list");

/* Creates list items along with remove buttons upon Enter Key */
itemInput.addEventListener("keyup", (e) => { 
	if(e.key === "Enter") {
		addItem();
	}
})

/* Creates list items along with remove buttons upon click */
addButton.addEventListener("click", addItem);

function addItem() {
	
	const listItem = document.createElement("li"); // Create a list item
	const textNode = 
		document.createTextNode(itemInput.value);

	const removeButton =
		document.createElement("button");
	removeButton.textContent = "Remove";
	removeButton.style.margin = "2px 5px"; // Top/Button and Left/Right margins
	removeButton.addEventListener("click", removeItem);

	listItem.append(textNode);
	listItem.append(removeButton);

	// listItem.textContent = itemInput.value;
	list.prepend(listItem); // prepend a list item to unordered list with id #list

	itemInput.value = ""; // Resets input
	itemInput.focus(); 

}

/* Remove item on list */
function removeItem(e: Event) {
	const removeButton = e.target as HTMLButtonElement;
	const listItem = removeButton.parentElement;
	listItem.remove();
}