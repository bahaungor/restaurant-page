import { headerItems } from "./header";
import { home } from "./home";


const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
document.body.appendChild(mainContainer);
const main = document.createElement("main");
main.classList.add("main");

headerItems.forEach(item => {
    mainContainer.appendChild(item);
});
mainContainer.appendChild(main);
main.appendChild(home);

console.log("webpack working")

export {main}