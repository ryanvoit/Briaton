import { getTypeCount } from "./getElementsQS.js";
import { getCheckboxes } from "./getElementsQS.js";

export default function InitCount(arr) {
    for (let i = 0; i < 5; i++) {
        const element = getCheckboxes()[i];
        let newArray = arr.filter((item) => item.type.includes(element.value))
        if (newArray.length === 0) {
            getTypeCount()[i].textContent = 0
        } else {
            getTypeCount()[i].textContent = newArray.length
        }
    }
}