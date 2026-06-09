export function getliEl() {
    const liEl = document.createElement('li')
    return liEl
}

export function getDivEl() {
    const divEl = document.createElement('div')
    return divEl
}

export function getImgEl() {
    const imgEl = document.createElement('img')
    return imgEl
}

export function getLinkEl() {
    const linkEl = document.createElement('a')
    linkEl.href = '#'
    return linkEl
}

export function getSpanEl() {
    const spanEl = document.createElement('span')
    return spanEl
}

export function getSvgEl() {
    const svgEl = document.createElement('svg')
    const useEl = document.createElement('use')
    svgEl.append(useEl)
    return svgEl
}

export function getTitleEl() {
    const h2El = document.createElement('h2')
    return h2El
}

export function getBtnEl() {
    const btnEl = document.createElement('button')
    return btnEl
}

export function getlistEl() {
    const listEl = document.createElement('ul')
    return listEl
}

