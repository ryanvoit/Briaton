export default function modalWindowInit(type) {
    const window = document.createElement('div')
    window.classList.add('modal-window')

    switch(type) {
        case 'success':
            window.textContent = 'Вы успешно зарегестрировались на сайте!'
            window.classList.remove('modal-window--fail')
            break
        case 'fail':
            window.textContent = 'Мы не можем Вас зарегестрировать на сайте, введите данные корректно!'
            window.classList.add('modal-window--fail')
            break
    }

    document.body.append(window)
}