import { headerItems, menuItem1, menuItem2, menuItem3 } from "./header";
import { home } from "./home";
import { main } from "./index";
import { menus } from "./menus";
import { contact } from "./contact";


function createDomElement(type, className, text){
    let newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
}

function renderHome(){
    main.innerHTML = "";
    main.appendChild(home);
}

function renderMenus(){
    main.innerHTML = "";
    main.appendChild(menus);
}

function renderContact(){
    main.innerHTML = "";
    main.appendChild(contact)
}

export {createDomElement, renderHome, renderMenus, renderContact}