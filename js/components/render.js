import { getCatalogueList } from "./getElementsQS.js";
import cardInit from "./cardInit.js";

export default function render(arr) {
    getCatalogueList().innerHTML = ''
    arr.forEach(card => {
        cardInit(card, 'usual')
    });
}

