import { getSelect } from "./getElementsQS.js";
import { pagination } from "./pagination.js";
import render from "./render.js";

export function sorting(arr) {
    sort(arr)
    getSelect().addEventListener('change', function() {
        sort(arr)
    })
}

function sort(arr) {
    switch (getSelect().value) {
        case 'price-min':
            arr = arr.sort((a, b) => a.price.new - b.price.new)
            break
        case 'price-max':
            arr = arr.sort((a, b) => b.price.new - a.price.new)
            break
        case 'rating-max':
            arr = arr.sort((a, b) => b.rating - a.rating)
            break
    }
    render(arr)
    pagination(arr)
}