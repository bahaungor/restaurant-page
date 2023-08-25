import { setTheme } from './themeUtils';
import { createHome } from './homeModule';
import { createMenus } from './menuModule'
import { createContact } from './contactModule';
import "./style.css"; 

document.querySelector('.tt').addEventListener('click', setTheme);
document.querySelector('.home').addEventListener('click', createHome)
document.querySelector('.menus').addEventListener('click', createMenus)
document.querySelector('.contact').addEventListener('click', createContact)
createHome()