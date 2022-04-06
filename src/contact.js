import { createDomElement } from "./page-loader";


const contact = createDomElement("div", "contact", undefined);
const title = createDomElement("h1", undefined, "Contact Us")
const br1 = document.createElement("br");
const img = createDomElement("img", "contact-us-image", undefined);
img.setAttribute("src", "../src/images/contact-us.jpg");
img.setAttribute("alt", "Restaurant Location");
const br2 = document.createElement("br");
const p = createDomElement("p", undefined, "Address: 400027 Cluj Napoca, 8 G. Baritiu Str. Telephone: 879875646165465 Fax: 78798789798798789 Email: vampires@vampiresas.ro");

contact.appendChild(title);
contact.appendChild(br1);
contact.appendChild(img);
contact.appendChild(br2);
contact.appendChild(p);

export { contact }