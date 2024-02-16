const sortBtn = document.querySelector('.sort__btn')
const sortWrapper = document.querySelector('.sort__wrapper')
sortBtn.addEventListener('click', () => {
    sortWrapper.classList.toggle('toggle')
})