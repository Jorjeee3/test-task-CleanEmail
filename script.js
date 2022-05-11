const servicesButtons = document.querySelectorAll('.services-button')
const cleanItems = document.querySelectorAll('.clean-item')

const firstCleanList = document.querySelector('.clean-list-1')
const secondCleanList = document.querySelector('.clean-list-2')
const thirdCleanList = document.querySelector('.clean-list-3')
const servicesButtonFirst = document.querySelector('.services-button-first')
const servicesButtonSecond = document.querySelector('.services-button-second')
const servicesButtonThird = document.querySelector('.services-button-third')

thirdCleanList.style.display = 'none'
secondCleanList.style.display = 'none'

servicesButtonFirst.addEventListener('click', () => {
    thirdCleanList.style.display = 'none'
    secondCleanList.style.display = 'none'
    firstCleanList.style.display = 'flex'
})

servicesButtonSecond.addEventListener('click', () => {
    thirdCleanList.style.display = 'none'
    firstCleanList.style.display = 'none'
    secondCleanList.style.display = 'flex'
})

servicesButtonThird.addEventListener('click', () => {
    secondCleanList.style.display = 'none'
    firstCleanList.style.display = 'none'
    thirdCleanList.style.display = 'flex'
})

servicesButtons.forEach(item  => {
    item.addEventListener('click', () => toggleActiveClass())
})


