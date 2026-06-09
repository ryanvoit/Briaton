import cardInit from "./cardInit.js";

export function DayProductListInit(arr) {
    arr = arr.filter((item) => item.goodsOfDay)

    arr.forEach(card => {
        cardInit(card, 'goodsOfDay')
    });

    slider()
}

function slider() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true, 
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.day-products__navigation-btn--next',
            prevEl: '.day-products__navigation-btn--prev'
        }
    })
} 
