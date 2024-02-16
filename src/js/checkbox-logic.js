
const createdItems = Array.from(document.querySelectorAll('.result__item'))
const checkboxBtns = document.querySelectorAll('.sidebar__check-wrapper')
const resultItems = document.querySelectorAll('.result__item')


function addResultItem(newItem, selectedText) {
    newItem.classList.add('result__item')
    newItem.innerHTML = `
    ${selectedText}
    <span class="close-btn"></span>
  `

    newItem.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            newItem.remove()
            createdItems.splice(createdItems.indexOf(newItem), 1)
        })
    })
    document.querySelector('.result__wrapper').appendChild(newItem)
    createdItems.push(newItem)
}

checkboxBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const sidebarItems = document.querySelectorAll('.sidebar__item')
        const sidebarItem = sidebarItems[index]
        sidebarItem.classList.toggle('active')

        const selectedText = sidebarItem.querySelector('.sidebar__text').textContent
        const newItem = document.createElement('div')

        if (sidebarItem.classList.contains('active')) {
            addResultItem(newItem, selectedText)
        } else {
            const existingItem = createdItems.find(item => item.classList.contains('active'))
            if (existingItem) {
                existingItem.classList.remove('active')
                existingItem.remove()
                createdItems.splice(createdItems.indexOf(existingItem), 1)
            }
        }
    })
})

function removeResultItem(item) {
    item.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            item.remove()
            createdItems.splice(createdItems.indexOf(item), 1)
        })
    })
}

resultItems.forEach(item => {
    const closeBtn = item.querySelector('.close-btn')
    if (closeBtn) {
        removeResultItem(item)
    }
})

