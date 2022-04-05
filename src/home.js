import { createDomElement } from "./page-loader";

const home = createDomElement("div", "home", undefined);
const about = createDomElement("div", "about", undefined);
const aboutTitle = createDomElement("div", undefined, "About");
const br = createDomElement("br", undefined, undefined);
const p = createDomElement("p", undefined, "We are here to serve best meals to our customers. We are totally not vampires and we will not suck your blood under any circumstances. Please visit us whenever you can");
const img = createDomElement("img", "about-image", undefined);
img.setAttribute("src", "../src/images/vampire-family.PNG");
img.setAttribute("alt", "vampires");

home.appendChild(about);
about.appendChild(aboutTitle);
about.appendChild(br);
about.appendChild(p);
about.appendChild(br);
about.appendChild(img);

export {home};