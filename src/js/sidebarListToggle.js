const toggleBtns = document.querySelectorAll('.sidebar-arrow')

toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target')
        const targetItem = document.getElementById(targetId)

        if (targetItem.classList.contains('sidebar-is-show')) {
            btn.style.setProperty('transform', 'rotate(0deg)')
            targetItem.classList.remove('sidebar-is-show')
        } else {
            btn.style.setProperty('transform', 'rotate(180deg)')
            targetItem.classList.add('sidebar-is-show')
        }
    })
})