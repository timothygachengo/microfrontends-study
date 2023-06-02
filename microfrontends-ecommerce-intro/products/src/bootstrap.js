import { faker } from '@faker-js/faker'

const mount = (el) => {
    document.createElement('h2')
    document.querySelector('h2').innerHTML = 'Products'

    let products = ''

    for (let i = 0; i < 8; i++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }

    el.innerHTML = products
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products')

    if (el) {
       mount(el)
    }
}

export { mount };
