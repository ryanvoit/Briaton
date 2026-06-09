import fetchData from "./fetchData.js"
import { getCheckboxes, getFilterReset, getRadioes } from "./getElementsQS.js"
import render from "./render.js"
import { sorting } from "./sorting.js"
 
export default function filtrationCheckbox(arr) {
    filterCheckbox(arr)
    for (let i = 0; i < 5; i++) {
        const checkbox = getCheckboxes()[i]
        checkbox.addEventListener('change', function() {
            filterCheckbox(arr)
        })
    }
}

function filterCheckbox(arr) {
    for (let i = 0; i < 5; i++) {
        const checkbox = getCheckboxes()[i]
        if(checkbox.checked) {
            arr = arr.filter((item) => item.type.includes(checkbox.value));
        } 
    }
    render(arr)

    getFilterReset().addEventListener('click', function() {
        for (let i = 0; i < 5; i++) {
            const checkbox = getCheckboxes()[i];
            checkbox.checked = false
        }
        getRadioes()[0].checked = false
        arr = fetchData()
    })

    sorting(arr)
}