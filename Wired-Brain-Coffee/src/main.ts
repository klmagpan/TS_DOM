import { CoffeesComponent } from "./components/coffeesComponent";
import { ShopsComponent } from "./components/shopsComponent";

const output = document.querySelector("#output");
const coffeesButton = document.querySelector<HTMLButtonElement>("#coffeesButton");
const shopsButton = document.querySelector<HTMLButtonElement>("#shopsButton");
const themeInput = document.querySelector<HTMLInputElement>("#themeInput");

themeInput?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

coffeesButton?.addEventListener("click", () => {
  setActiveButton(coffeesButton);
  output?.replaceChildren(new CoffeesComponent().render());
});

shopsButton?.addEventListener("click", () => {
  setActiveButton(shopsButton);
  output?.replaceChildren(new ShopsComponent().render());
});

function setActiveButton(activeButton: HTMLButtonElement) {
  const buttons = document.querySelectorAll<HTMLButtonElement>("#menu button");
  buttons.forEach(button =>
    button.classList.toggle("activeButton", button === activeButton)
  );
}
