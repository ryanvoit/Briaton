import filtrationCheckbox from "./filtrationCheckbox.js";
import { getRadioes, getLocationCityName } from "./getElementsQS.js";
// import filterCheckbox from "./filtrationCheckbox.js";
// import filtrationCheckbox from "./filtrationCheckbox.js";
import render from "./render.js";

export default function filtrationRadio(arr) {
    radioFilter(arr)
    getRadioes().forEach((radio) => {
        radio.addEventListener('change', function () {
            radioFilter(arr)
        })
    })
}

function radioFilter(arr) {
    if (getRadioes()[0].checked) {
        let newArray = []
        switch (getLocationCityName().textContent) {
            case 'Оренбург':
                newArray = arr.filter((item) => item.availability.orenburg > 0)
                break
            case 'Москва':
                newArray = arr.filter((item) => item.availability.moscow > 0)
                break
            case 'Санкт-Петербург':
                newArray = arr.filter((item) => item.availability.saintPetersburg > 0)
                break
        }
        render(newArray)
        filtrationCheckbox(newArray)
    } else {
        render(arr)
        filtrationCheckbox(arr)
    }
}


