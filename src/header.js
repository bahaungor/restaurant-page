import { placeElement } from "./page-loader";
// function placeElement(parent, elementType, className = "", textContent)
let container = document.querySelector("#content");

let div = "div";
let h1 = "h1";
let h2 = "h2";
let br = "br";
let p = "p";
let img = "img";

let header = "header";
let whiteSeperator = "white-seperator";
let topMenu = "top-menu";
let topMenuItem = "top-menu-item";

let headerText = "Corolla Club Restaurant";

let topHeader = placeElement(container, div, header, headerText);
let seperator = placeElement(container, div, whiteSeperator, headerText);
let menu
