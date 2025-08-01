export class ShopsComponent {
	render(): HTMLElement {
	  const shops = ["Franky", "Zuri", "Ravi"];
	  const div = document.createElement("div");
  
	  shops.forEach(shop => {
		const p = document.createElement("p");
		p.textContent = shop;
		div.appendChild(p);
	  });
  
	  return div;
	}
  }
  
