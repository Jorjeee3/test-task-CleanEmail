const servicesButtons = document.querySelectorAll('.services-button')
const cleanItems = document.querySelectorAll('.clean-item')

const firstCleanList = document.querySelector('.clean-list-1')
const secondCleanList = document.querySelector('.clean-list-2')
const thirdCleanList = document.querySelector('.clean-list-3')
const servicesButtonFirst = document.querySelector('.services-button-first')
const servicesButtonSecond = document.querySelector('.services-button-second')
const servicesButtonThird = document.querySelector('.services-button-third')

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



// function toggleActiveClass() {
//     for (let i = 0; i <= servicesButtons.length; i++) {
//         servicesButtons[i].classList.remove('active')
//     }
//     servicesButtons.forEach(item  => {
//         item.addEventListener('click', () => {
//             item.classList.add('active')
//         })
//     })
// }

 
//  servicesButtons[i].addEventListener('click', (item) => {
//     item.classList.add('active')
//     console.log(i);
// })

servicesButtons.forEach(item  => {
    item.addEventListener('click', () => toggleActiveClass())
})


// item.classList.remove('active')
// item.classList.add('active')

// for (let i = 0 ; cleanItems.length <= 2; i++ ) {
//     if (index === cleanItems[i]) {
//         cleanItems[i].classList.add('clean-item-active')
//     } else {
//         return undefined
//     }
// }


// $(document).ready(function() {
//     $(".services-button").on('click', function() {
//         $(".active").toggle(1000)
//     });
// })

