import fetchData from './fetchData.js'
import * as elements from './getElementsQS.js'

export function addClickToCatalogueBtn() {
    const btn = elements.getCatalogueBtn()
    const menu = elements.getMainMenu()

    btn.addEventListener('click', () => {
        menu.classList.toggle('main-menu--active')
    })
}

export function addClickCloseToCatalogue() {
    const btn = elements.getCatalogueBtnClose()
    const menu = elements.getMainMenu()

    btn.addEventListener('click', () => {
        menu.classList.toggle('main-menu--active')
    })
}

export function addClickToLocationCity() {
    const btn = elements.getLocationCityBtn()

    btn.addEventListener('click', () => {
        btn.classList.toggle('location__city--active')
    })

    const btns = elements.getLocationBtns()

    const cityName = elements.getLocationCityName()

    for (let i = 0; i < btns.length; i++) {
        const btnCity = btns[i];

        btnCity.addEventListener('click', function(e) {
            cityName.textContent = btnCity.textContent
            btn.classList.toggle('location__city--active')
            fetchData()
        })
    }
}

export function addClickCart() {
    const btn = elements.getCartBtn()[0]

    btn.addEventListener('click', () => {
        elements.getCartDisplay().classList.toggle('basket--active');
    })
}

export function accordion() {
    elements.getAccordionBtn().forEach(accordionBtn => {
        accordionBtn.addEventListener('click', function() {
            if (accordionBtn.classList.contains('accordion__btn--active')) {
                accordionActiveRemove()
            } else {
                accordionActiveRemove()
                accordionBtn.classList.add('accordion__btn--active')
            }
        })
    })
}

function accordionActiveRemove() {
    elements.getAccordionBtn().forEach(accordion => {
        accordion.classList.remove('accordion__btn--active')
    })
}
