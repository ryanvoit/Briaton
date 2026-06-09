import { getLinkEl } from "./createElements.js";
import { getCartList, getCartGoodClose, getCartDisplay, getEmptyWrapper, getCartListItems, getCartCount } from "./getElementsQS.js";

let cart = []
let idCart = 0

export function cartWork(arr) {
    getCartCount().textContent = cart.length;
    document.querySelectorAll('.btn--icon').forEach(btnCart => {

        btnCart.addEventListener('click', function(e) {
            e.preventDefault()
            idCart++
            let good = arr.find(item => item.id == btnCart.dataset.id)
            good = {
                ...good,
                idCart
            }
            cart.push(good)
            cartInit(cart)

            getCartCount().textContent = cart.length;

            getCartGoodClose().forEach(btnClose => {
                btnClose.addEventListener('click', function() {
                    cart = cart.filter((item) => item.idCart != btnClose.dataset.id)

                    getCartListItems().forEach(listItem => {
                        if(listItem.lastElementChild.dataset.id == btnClose.dataset.id) {
                            listItem.remove()
                        } 
                    })

                    getCartCount().textContent = cart.length;

                    if(cart.length == 0) {
                        getCartDisplay().innerHTML = `
                            <ul class="basket__list"></ul>
                            <div class="basket__empty-block">Корзина пока пуста</div>
                        `
                    }
                })
            })
        })
    })
}

function cartInit(cart) {
    if(cart.length !== 0) {
        if(getEmptyWrapper()) {
            getEmptyWrapper().remove()
            cartGoodCardInit(cart)

        } else {
            cartGoodCardInit(cart)
        }
    } else {
        getCartDisplay().innerHTML = `
            <ul class="basket__list"></ul>
            <div class="basket__empty-block">Корзина пока пуста</div>
        `
    }
}

function cartGoodCardInit(cart) {
    getCartList().innerHTML = ''
    console.log(cart);

    cart.forEach(good => {
        const goodCard = document.createElement('li')
        goodCard.classList.add('basket__item')

        goodCard.innerHTML = `
            <div class="basket__img">
                <img src=${good.image} alt="Фотография товара" height="60" width="60">
            </div>
            <span class="basket__name">${good.name}</span>
            <span class="basket__price">${good.price.new}</span>
            <button class="basket__item-close" type="button" data-id=${good.idCart}>
                <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
                    <use xlink:href="images/sprite.svg#icon-close"></use>
                </svg>
            </button>
        `
        getCartList().append(goodCard)
    })

    const link = getLinkEl()
    link.textContent = 'Перейти к оформлению'
    link.classList.add(
        'basket__link',
        'btn'   
    )

    getCartList().append(link)
}