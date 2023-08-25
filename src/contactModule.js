function createContact(){
    const div = document.createElement('div')
    div.classList.add('main')
    const h1 = document.createElement('h1')
    h1.textContent = 'Contact Us'
    div.appendChild(h1)
    const img = document.createElement('img')
    img.setAttribute('src', './images/contact-us.jpg')
    img.setAttribute('alt', 'contact image')
    div.appendChild(img)
    const p = document.createElement('p')
    p.textContent = 'Address: 400027 Cluj Napoca, 8 G. Baritiu Str. Telephone: 879875646165465 Fax: 78798789798798789 Email: vampires@vampiresas.ro'
    div.appendChild(p)
    document.querySelector('main').innerHTML = ''
    document.querySelector('main').appendChild(div)
}

export { createContact }