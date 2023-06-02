import { faker } from '@faker-js/faker'
document.querySelector('h3').innerHTML = 'Cart'
 const cartText = `<div>You have ${faker.string.numeric()} items in the cart</div>`
document.querySelector('#cart-num').innerHTML = cartText
