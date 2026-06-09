import filtrationRadio from "./filtrationRadio.js";
import InitCount from "./InitCount.js";
import { getCatalogueList } from "./getElementsQS.js";
import { DayProductListInit } from "./slider.js";

export default async function fetchData() {
    const cardObjectInfo = await fetch('./data/data.json')

    return cardObjectInfo.json().then((data) => {
        InitCount(data);
        DayProductListInit(data) 
        getCatalogueList().innerHTML = ''
        filtrationRadio(data)       
    })
}

