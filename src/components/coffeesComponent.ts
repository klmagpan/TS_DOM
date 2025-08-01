export class CoffeesComponent {
	render(): HTMLElement {
	  const coffees = ["Cappuccino", "Espresso", "Mocha"];
	  const div = document.createElement("div");
  
	  coffees.forEach(coffee => {
		const p = document.createElement("p");
		p.textContent = coffee;
		div.appendChild(p);
	  });
  
	  return div;
	}
  }
  
