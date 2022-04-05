import { headerItems } from "./header";

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
document.body.appendChild(mainContainer);
const main = document.createElement("main");
main.classList.add("main");

headerItems.forEach(item => {
    mainContainer.appendChild(item);
    console.log(item);
});

mainContainer.appendChild(main);

export {main}