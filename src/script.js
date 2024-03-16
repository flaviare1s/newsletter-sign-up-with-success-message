const email = document.querySelector('#email')
const btnSub = document.querySelector('#btn')
const error = document.querySelector('#error')
const section1 = document.querySelector('#sec1')
const section2 = document.querySelector('#sec2')
const emailValue = document.querySelector('#emailValue')
const backBtn = document.querySelector('#backBtn')

function handleClick(event) {
    event.preventDefault()
    if(!email.checkValidity()) {
        email.classList.add('invalid')
        email.value = 'ash@loremcompany.com'
        error.innerText = 'Valid email required'
    } else {
        section1.classList.add('inactive')
        section2.classList.add('active')
        emailValue.innerText = email.value
    }
}

btnSub.addEventListener('click', handleClick)

function goBack() {
    section1.classList.remove('inactive')
    section2.classList.remove('active')
}

backBtn.addEventListener('click', goBack)

