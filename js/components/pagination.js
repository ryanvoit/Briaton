import { getPagination, getPaginationBtn } from "./getElementsQS.js";
import render from "./render.js";
import { cartWork } from "./cart.js";
import tippyJs from "./tippy.js";

export function pagination(arr) {
    getPagination().innerHTML = ''
    if(arr.length < 6) {
        specialLoop(1)
    } else if (arr.length > 6 && arr.length < 12) {
        specialLoop(2)
    } else if (arr.length > 12 && arr.length < 18) {
        specialLoop(3)
    } else {
        specialLoop(4)
    }

    const slicedBasic = slice('1', arr)
    render(slicedBasic)
    cartWork(arr)
    tippyJs(arr)

    getPaginationBtn().forEach(btn => {
        btn.addEventListener('click', function() {
            const sliced = slice(btn.textContent, arr)

            render(sliced)
            cartWork(arr)
            tippyJs(arr)
        })
    });
}

function specialLoop(g) {
    for (let i = 0; i < g; i++) {
        const liEl = document.createElement('li')
        liEl.classList.add('catalog__pagination-item')
        liEl.innerHTML = `<button class="catalog__pagination-link" data-index=${i + 1}>${i + 1}</button>`

        getPagination().append(liEl)
    }
}

function slice(index, arr) {
    switch(index) {
        case '1':
            arr = arr.slice(0, 6)
            break
        case '2':
            arr = arr.slice(6, 12)
            break
        case '3':
            arr = arr.slice(12, 18)
            break
        case '4':
            arr = arr.slice(18, 20)
            break
    }
    return arr
}