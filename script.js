/*function funcionamento() {
    const aberto = document.querySelector('.aberto')
    setInterval(horarioFuncionamento, 1000)
    function horarioFuncionamento() {
        const date = new Date()
        const d = date.getDay()
        const hUtc = date.getUTCHours()
        const horaAgora = hUtc - 3
        if (horaAgora >= 8) {
            if ((d == 6 || d == 0) && horaAgora < 16) {
                styleAberto('Aberto agora', 'open', 'fechado')
            }
            else if ((d !== 6 && d !== 0) && horaAgora < 21) {
                styleAberto('Aberto agora', 'open', 'fechado')
            }
            else {
                styleAberto('Fechado agora', 'fechado', 'open')
            }
        } else {
            styleAberto('Fechado agora', 'fechado', 'open')
        }

    }
    function styleAberto(frase, classe, remover) {
        aberto.textContent = frase;
        aberto.classList.remove(remover)
        aberto.classList.add(classe)
    }
    horarioFuncionamento()
}

funcioamento()
*/
const headerMenu = document.querySelector('.header__btn-menu')
const nav = document.querySelector('.header__nav')

function openMenu() {
    headerMenu.classList.toggle('ativo');
    nav.classList.toggle('ativo')
}

function closeMenu() {
    headerMenu.classList.remove('ativo');
    nav.classList.remove('ativo')
}

headerMenu.addEventListener('click', openMenu)
window.addEventListener('scroll', closeMenu)

/* animaçao ao scroll */

const animaElements = document.querySelectorAll('[data-anima]')

function animateElements() {
    const DISTANCE_WINDOW_TOP = window.pageYOffset + window.innerHeight * 3 / 4;
    animaElements.forEach(element => {
        if (DISTANCE_WINDOW_TOP > element.offsetTop) {
            element.classList.add('animated')
        } else {
            element.classList.remove('animated')
        }
    })
}
animateElements()
window.addEventListener('scroll', animateElements)