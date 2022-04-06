import { createDomElement } from "./page-loader";

const menus = createDomElement("div", "menus", undefined);

const dish1 = createDomElement("div", "menu-dish", undefined);
const title1 = createDomElement("h2", undefined, "Monster Burger");
const img1 = createDomElement("img", "menu-dish-image", undefined);
img1.setAttribute("src", "../src/images/burger-2.png");
img1.setAttribute("alt", "Monster Burger");
dish1.appendChild(title1);
dish1.appendChild(img1);

const dish2 = createDomElement("div", "menu-dish", undefined);
const title2 = createDomElement("h2", undefined, "Double Monster Burger");
const img2 = createDomElement("img", "menu-dish-image", undefined);
img2.setAttribute("src", "../src/images/burger.png");
img2.setAttribute("alt", "Double Monster Burger");
dish2.appendChild(title2);
dish2.appendChild(img2);

const dish3 = createDomElement("div", "menu-dish", undefined);
const title3 = createDomElement("h2", undefined, "Monster Cake");
const img3 = createDomElement("img", "menu-dish-image", undefined);
img3.setAttribute("src", "../src/images/cake.png");
img3.setAttribute("alt", "Monster Cake");
dish3.appendChild(title3);
dish3.appendChild(img3);

const dish4 = createDomElement("div", "menu-dish", undefined);
const title4 = createDomElement("h2", undefined, "Monster Cupcake");
const img4 = createDomElement("img", "menu-dish-image", undefined);
img4.setAttribute("src", "../src/images/cupcake.png");
img4.setAttribute("alt", "Monster Cupcake");
dish4.appendChild(title4);
dish4.appendChild(img4);

const dish5 = createDomElement("div", "menu-dish", undefined);
const title5 = createDomElement("h2", undefined, "Grilled Octopus");
const img5 = createDomElement("img", "menu-dish-image", undefined);
img5.setAttribute("src", "../src/images/octopus.png");
img5.setAttribute("alt", "Grilled Octopus");
dish5.appendChild(title5);
dish5.appendChild(img5);

const dish6 = createDomElement("div", "menu-dish", undefined);
const title6 = createDomElement("h2", undefined, "Monster Pumpkin");
const img6 = createDomElement("img", "menu-dish-image", undefined);
img6.setAttribute("src", "../src/images/pumpkin.png");
img6.setAttribute("alt", "Monster Pumpkin");
dish6.appendChild(title6);
dish6.appendChild(img6);

menus.appendChild(dish1);
menus.appendChild(dish2);
menus.appendChild(dish3);
menus.appendChild(dish4);
menus.appendChild(dish5);
menus.appendChild(dish6);

export { menus }