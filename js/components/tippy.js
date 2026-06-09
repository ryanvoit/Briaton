import { getInfoBtn } from "./getElementsQS.js";

export default function tippyJs(arr) {
    
    getInfoBtn().forEach(infoBtn => {
        const tooltip = infoBtn.nextElementSibling

        tippy(infoBtn, {
            content: tooltip, 
            trigger: 'click'
        })
    })
}