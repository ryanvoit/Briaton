// import * as elements from './createElements.js'
import { getCatalogueList, getDayProductList } from "./getElementsQS.js"

// type = 'goodsOfDay' || 'usual'

export default function cardInit(cardObject, type) {
    const itemList = document.createElement('li')
    const classItem = (type === 'goodsOfDay') ? 'day-products__item' : 'catalog__item'
    const classSecondItem = (type === 'goodsOfDay') ? 'swiper-slide' : null
    itemList.classList.add(classItem)
    itemList.classList.add(classSecondItem)
    const classDiv = (type === 'goodsOfDay') ? 'product-card--small' : null
    itemList.innerHTML = `
        <div class='product-card ${classDiv}'>
            <div class="product-card__visual">
                <img class="product-card__img" src=${cardObject.image} height="436" width="290" alt="Изображение товара">
                <div class="product-card__more">
                    <a href="#" class="product-card__link btn btn--icon" data-id=${cardObject.id}>
                        <span class="btn__text">В корзину</span>
                        <svg width="24" height="24" aria-hidden="true">
                            <use xlink:href="images/sprite.svg#icon-basket"></use>
                        </svg>
                    </a>
                    <a href="#" class="product-card__link btn btn--secondary">
                        <span class="btn__text">Подробнее</span>
                    </a>
                </div>
            </div>
            <div class="product-card__info">
                <h2 class="product-card__title">${cardObject.name}</h2>
                <span class="product-card__old">
                    <span class="product-card__old-number">${cardObject.price.old}</span>
                    <span class="product-card__old-add">₽</span>
                </span>
                <span class="product-card__price">
                    <span class="product-card__price-number">${cardObject.price.new}</span>
                    <span class="product-card__price-add">₽</span>
                </span>
                <div class="product-card__tooltip tooltip">
                    <button class="tooltip__btn" aria-label="Показать подсказку" data-id=${cardObject.id}>
                        <svg class="tooltip__icon" width="5" height="10" aria-hidden="true">
                            <use xlink:href="images/sprite.svg#icon-i"></use>
                        </svg>
                    </button>
                    <div class="tooltip__content" >
                        <span class="tooltip__text">Наличие товара по городам:</span>
                        <ul class="tooltip__list">
                            <li class="tooltip__item">
                                <span class="tooltip__text">Москва: <span class="tooltip__count">${cardObject.availability.moscow}</span></span>
                            </li>
                            <li class="tooltip__item">
                                <span class="tooltip__text">Оренбург: <span class="tooltip__count">${cardObject.availability.orenburg}</span></span>
                            </li>
                            <li class="tooltip__item">
                                <span class="tooltip__text">Санкт-Петербург: <span class="tooltip__count">${cardObject.availability.saintPetersburg}</span></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `

    const container = (type === 'goodsOfDay') ? getDayProductList() : getCatalogueList()
    container.append(itemList)

    /* 
    const catalogueItem = elements.getliEl()
    catalogueItem.classList.add('catalog__item')

    const productCard = elements.getDivEl()
    productCard.classList.add('product-card')

    const productCardVisual = elements.getDivEl()
    productCardVisual.classList.add('product-card__visual')

    const Img = elements.getImgEl()
    Img.classList.add('product-card__img')
    Img.src = cardObject.image
    Img.height = 436
    Img.width = 290
    Img.alt = 'Изображение товара'

    const productCardMore = elements.getDivEl()
    productCardMore.classList.add('product-card__more')

    const linkCart = elements.getLinkEl()
    linkCart.classList.add(
        'product-card__link',
        'btn',
        'btn--icon')
    linkCart.href = '#'
    linkCart.setAttribute('data-id', cardObject.id)

    const linkCartSpan = elements.getSpanEl()
    linkCartSpan.textContent = 'В корзину'

    const linkCartSvg = elements.getSvgEl()
    linkCartSvg.setAttribute('aria-hidden', 'true')
    linkCartSvg.setAttribute('width', '24')
    linkCartSvg.setAttribute('height', '24')
    linkCartSvg.innerHTML = "<use xlink:href='images/sprite.svg#icon-basket'></use>"

    const LinkDetails = elements.getLinkEl()
    LinkDetails.classList.add(
        'product-card__link',
        'btn',
        'btn--secondary')
    LinkDetails.href = '#'
    LinkDetails.textContent = 'Подробнее'

    const productCardInfo = elements.getDivEl()
    productCardInfo.classList.add('product-card__info')

    const title = elements.getTitleEl()
    title.textContent = cardObject.name
    title.classList.add('product-card__title')

    const oldPrice = elements.getDivEl()
    oldPrice.textContent = `${cardObject.price.old} ₽`
    oldPrice.classList.add('product-card__old')

    const newPrice = elements.getDivEl()
    newPrice.textContent = `${cardObject.price.new} ₽`
    newPrice.classList.add('product-card__price')

    const tooltipWrapper = elements.getDivEl()
    tooltipWrapper.classList.add(
        'product-card__tooltip',
        'tooltip'
    )

    const tooltipBtn = elements.getBtnEl()
    tooltipBtn.classList.add('tooltip__btn')
    tooltipBtn.setAttribute('aria-label', 'Показать подсказку')

    const tooltipIcon = elements.getSvgEl()
    tooltipIcon.setAttribute('aria-hidden', 'true')
    tooltipIcon.setAttribute('width', '5')
    tooltipIcon.setAttribute('height', '10')
    tooltipIcon.innerHTML = "<use xlink:href='images/sprite.svg#icon-i'></use>"

    const tooltipContent = elements.getDivEl()
    tooltipContent.classList.add('tooltip__content')

    const tooltipText = elements.getSpanEl()
    tooltipText.classList.add('tooltip__text')
    tooltipText.textContent = 'Наличие товара по городам:'

    const tooltipList = elements.getlistEl()
    tooltipList.classList.add('tooltip__list')

    const cityNames = ['Москва', 'Оренбург', 'Санкт-Петербург']
    const availabilities = [cardObject.availability.moscow, cardObject.availability.orenburg, cardObject.availability.saintPetersburg]

    for (let i = 0; i < cityNames.length; i++) {
        const liEl = elements.getliEl();
        liEl.classList.add('tooltip__item')
        tooltipList.append(liEl)

        const spanEl = elements.getSpanEl()
        spanEl.classList.add('tooltip__text')
        spanEl.textContent = `${cityNames[i]}: ${availabilities[i]}`
        liEl.append(spanEl)
    }

    /// APPENDS

    getCatalogueList().append(catalogueItem)
    catalogueItem.append(productCard)

    productCard.append(
        productCardVisual,
        productCardInfo
    )

        productCardVisual.append(
            Img,
            productCardMore
        )

            productCardMore.append(
                linkCart,
                LinkDetails
            )

                linkCart.append(
                    linkCartSpan,
                    linkCartSvg
                )
        
        productCardInfo.append(
            title,
            oldPrice,
            newPrice,
            tooltipWrapper
        )

            tooltipWrapper.append(
                tooltipBtn,
                tooltipContent
            )

                tooltipBtn.append(tooltipIcon)

                tooltipContent.append(
                    tooltipText,
                    tooltipList
                )
                    */
}