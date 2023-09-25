const hamburger = document.querySelector('.hamburger')
const navlist = document.querySelector('.navlist')
const link = document.querySelectorAll('a')

hamburger.addEventListener('click', ()  => {
    navlist.classList.toggle('hide')
})

link.forEach(el => {el.addEventListener('click', () => {
        link.forEach(el => el.classList.remove('current'))
        el.classList.add('current')
    })
})