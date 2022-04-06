import { main } from ".";
import { home } from "./home";
import { menus } from "./menus";
import { renderHome, renderMenus , renderContact, createDomElement } from "./page-loader";

const header = createDomElement("header", "header", "Corolla Club Restaurant");
const whiteSeperator = createDomElement("div", "white-seperator", undefined);
const topMenu = createDomElement("menu", "top-menu", undefined);
const menuItem1 = createDomElement("div", "top-menu-item", "Home");
const menuItem2 = createDomElement("div", "top-menu-item", "Menus");
const menuItem3 = createDomElement("div", "top-menu-item", "Contact");
topMenu.appendChild(menuItem1);
topMenu.appendChild(menuItem2);
topMenu.appendChild(menuItem3);

menuItem1.addEventListener("click", renderHome);
menuItem2.addEventListener("click", renderMenus);
menuItem3.addEventListener("click", renderContact);

const headerItems = [header, whiteSeperator, topMenu]

export { headerItems, menuItem1, menuItem2, menuItem3 }