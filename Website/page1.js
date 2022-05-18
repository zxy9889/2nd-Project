const panels = document.querySelectorAll('.panel')

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))