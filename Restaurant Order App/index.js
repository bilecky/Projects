import { menuArray } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

const orderBox = document.querySelector('.order-box')
const bill = document.querySelector('.bill')
const totalOrders = []
let totalPrice

document.addEventListener('click', e => {
	if (e.target.dataset.id) {
		addProductToCart(e.target.dataset.id)
	} else if (e.target.dataset.delete) {
		deleteItem(e.target.dataset.delete)
	}
	console.log(totalOrders)
})
const renderingFreshCart = () => {
	let renderedHtml = ''

	totalOrders.forEach(order => {
		renderedHtml += `<div data-delete= "${order.uuid}"><p class="product-name">${order.name}</p><button data-delete ="${order.uuid}" class="remove-btn">remove</button> 
        <span>${order.price}</span></div`
	})
	totalPrice = totalOrders.reduce((total, cartProduct) => {
		return cartProduct.price + total
	}, 0)
	bill.textContent = totalPrice + "zł"
	orderBox.innerHTML = renderedHtml
}

function deleteItem(productId) {
	const deleteOrder = totalOrders.filter(order => {
		return order.uuid === productId
	})[0]

	for (let i = 0; i < totalOrders.length; i++) {
		if (totalOrders[i] === deleteOrder) {
			totalOrders.splice(i, 1)
		}
	}
	renderingFreshCart()
}

function addProductToCart(productId) {
	const targetProductObj = menuArray.filter(function (product) {
		return parseInt(productId) === product.id
	})[0]
	totalOrders.push({
		name: targetProductObj.name,
		price: targetProductObj.price,
		uuid: uuidv4(),
	})
	renderingFreshCart()
}


const getFeedHtml = () => {
	let renderProducts = ''

	menuArray.forEach(product => {
		renderProducts += `
        <div class="products-container">
                <div class="product-pic">${product.emoji}</div>
                <div class="product-details">
                    <div class="product-name">${product.name}</div>
                    <div class="product-spec">${product.ingredients}</div>
                    <div class="product-price">${product.price}zł</div>
                </div>
                <div data-id = ${product.id} class="product-add"><button>&#43;</button></div>
            </div>
        `
	})
	return renderProducts
}
const renderMenu = () => {
	document.querySelector('.products').innerHTML = getFeedHtml()
	const completeBtn = document.querySelector('.complete-btn')
	if (totalOrders.length === 0) {
		completeBtn.disabled = true
		completeBtn.style.cursor = 'not-allowed'
		completeBtn.style.opacity = '0.35'
	} else {
		completeBtn.disabled = false
		completeBtn.style.cursor = 'pointer'
		completeBtn.style.opacity = '1'
	}
}

renderMenu()
