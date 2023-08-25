function setTheme() {
    const root = document.documentElement;
    const themeBtn = root.querySelector(".tt");
    root.className === 'dark' ? root.removeAttribute('class') : root.className = 'dark';
    themeBtn.textContent == "☀️" ? themeBtn.textContent ="🌙" : themeBtn.textContent ="☀️"
}

// Thank you ES6 Modules!
export {setTheme};