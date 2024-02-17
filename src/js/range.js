const rangeLines = document.querySelectorAll('.range__line')

rangeLines.forEach(rangeLine => {
    rangeLine.addEventListener('mousedown', onMouseDown)
})

function onMouseDown(event) {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    const currentLine = event.currentTarget

    function onMouseMove(event) {
        const offsetX = Math.min(Math.max(event.clientX - currentLine.getBoundingClientRect().left, 0), currentLine.clientWidth)
        const rangeLineWidth = currentLine.offsetWidth

        const percentage = (offsetX / rangeLineWidth) * 100

        const greenLine = currentLine.querySelector('.green-line')
        const darkLine = currentLine.querySelector('.dark-line')
        const tooltip = currentLine.querySelector('.range__tooltip')


        const parentElement = currentLine.parentElement


        const totalSum = parentElement.querySelector('.range__total_sum')
        const totalCurSum = parentElement.querySelector('.range__current_sum')

        const totalSumValue = totalSum.innerText
        const getPercentOrDollar = (str) => {
            return /%/.test(str) ? '%' : '$'
        }
        const innerText = `${Math.round(percentage)}${getPercentOrDollar(totalSumValue)}`

        tooltip.style.left = `${offsetX - 31}px`
        greenLine.style.width = `${percentage}%`
        darkLine.style.width = `${100 - percentage}%`

        tooltip.innerText = innerText
        if (getPercentOrDollar(totalSumValue) == '%') {
            totalSum.innerText = innerText
        }
        if (totalCurSum) {
            const totalCurSumResult = Math.round((offsetX / rangeLineWidth) * 9999)
            totalCurSum.innerText = `${totalCurSumResult}$`
            tooltip.innerText = `${totalCurSumResult}$`
        }

    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
    }
}
