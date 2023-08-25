function createMenus(){
    
    const src = ['./images/burger.png', './images/burger-2.png', './images/cake.png', './images/cupcake.png', './images/octopus.png', './images/pumpkin.png']
    const titles = ['Monster Burger', 'Double Monster Burger', 'Monster Cake', 'Monster Cupcake', 'Grilled Octopus', 'Monster Pumpkin']
    const menuGrid = document.createElement('div')
    menuGrid.classList.add('menuGrid')
    for (let i = 0; i < src.length; i++) {
        const div = document.createElement('div')
        const innerDiv = document.createElement('div')
        innerDiv.textContent = titles[i]
        div.appendChild(innerDiv)
        const img = document.createElement('img')
        img.setAttribute('src', src[i])
        img.setAttribute('alt', 'food image')
        div.appendChild(img)
        menuGrid.appendChild(div)
    }
    document.querySelector('main').innerHTML = ''
    document.querySelector('main').appendChild(menuGrid)
}

export {createMenus}