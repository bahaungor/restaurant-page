export function placeElement(parent, elementType, className = "", textContent = ""){
    let child = document.createElement(elementType);
    child.textContent = textContent;
    child.classList.add(className);
    parent.appendChild(child);
    return parent;
}