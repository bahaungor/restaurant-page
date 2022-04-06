import { createDomElement } from "./page-loader";

const home = createDomElement("div", "home", undefined);
const about = createDomElement("div", "about", undefined);
const aboutTitle = createDomElement("h2", undefined, "About");
const br1 = document.createElement("br");
const br2 = document.createElement("br");
const p = createDomElement("p", undefined, "We are here to serve best meals to our customers. We are totally not vampires and we will not suck your blood under any circumstances. Please visit us whenever you can");
const img = createDomElement("img", "about-image", undefined);
img.setAttribute("src", "../src/images/vampire-family.PNG");
img.setAttribute("alt", "vampires");

home.appendChild(about);
about.appendChild(aboutTitle);
about.appendChild(br1);
about.appendChild(p);
about.appendChild(br2);
about.appendChild(img);

export {home};