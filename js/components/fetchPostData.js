import modalWindowInit from "./modalWindowInit.js"

export function fetchPostData() {
    const form = document.querySelector('.questions__form')

    const nameInput = document.querySelector('#name')
    const emailInput = document.querySelector('#email')
    const agreeInput = document.querySelector('#agree')

    const validate = new JustValidate(form)

    validate.addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Введите ваше имя'
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Минимальная длина имени - 3 символа'
        },
        {
            rule: 'maxLength',
            value: 20,
            errorMessage: 'Максимальная длина имени - 20 символов'
        }
    ])

    validate.addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Введите ваш email'
        },
        {
            rule: 'email',
            errorMessage: 'Email некорректно введен'
        }
    ])

    validate.addField('#agree', [
        {
            rule: 'required',
            errorMessage: 'Согласие на обработку данных - обязательно'
        }
    ])

    const dataUser = {
        name: nameInput.value,
        email: emailInput.value,
        agree: agreeInput.value
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        if(validate.isValid) {
            submitForm(dataUser)
            modalWindowInit('success')
        } else {
            modalWindowInit('fail');
        }
    })
}

async function submitForm(dataUser) {
    const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(dataUser)
    })
}

