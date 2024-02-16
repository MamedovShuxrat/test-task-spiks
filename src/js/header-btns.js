const buttons = document.querySelectorAll('.header__products_item')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'))

        btn.classList.add('active')
    })
})