import { home } from "./home";
import { main } from "./index";

function createDomElement(type, className, text){
    let newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
}

// function renderHome(){
//     main.innerHTML = "";
//     main.appendChild(home);
// }

export {createDomElement}