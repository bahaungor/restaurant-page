function createHome(){
    const main = document.createElement('div')
    main.classList.add('main')
    const h1 = document.createElement('h1')
    h1.textContent = 'About'
    main.appendChild(h1)
    const p = document.createElement('p')
    p.textContent = 'We are here to serve best meals to our customers. We are totally not vampires and we will not suck your blood under any circumstances. Please visit us whenever you can.'
    main.appendChild(p)
    const img = document.createElement('img')
    img.setAttribute('src', './images/vampire-family.PNG')
    img.setAttribute('alt', 'about-image')
    main.appendChild(img)
    
    document.querySelector('main').innerHTML = ''
    document.querySelector('main').appendChild(main)
}

export {createHome};