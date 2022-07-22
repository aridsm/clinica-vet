function funcionamento() {
    const aberto = document.querySelector('.entrada__aberto-fechado')
    setInterval(horarioFuncionamento, 5000)

    function horarioFuncionamento() {
        const date = new Date()
        const d = date.getDay()
        const hUtc = date.getUTCHours()
        const horaAgora = hUtc - 3

        if (horaAgora >= 8) {
            if ((d == 6 || d == 0) && horaAgora < 16) {
                styleAberto('Aberto agora', 'aberto')
            }
            else if ((d !== 6 && d !== 0) && horaAgora < 21) {
                styleAberto('Aberto agora', 'aberto')
            }
            else {
                styleAberto('Fechado agora')
            }
        } else {
            styleAberto('Fechado agora')
        }

    }
    function styleAberto(frase, classe = '') {
        aberto.textContent = frase;
        aberto.classList.add(classe)
    }
    horarioFuncionamento()
}

funcionamento()

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
    const DISTANCE_WINDOW_TOP = window.pageYOffset + window.innerHeight * 4 / 5;

    animaElements.forEach(element => {
        const DISTANCE_ELEMENT_TOP = element.getBoundingClientRect().top + window.pageYOffset;
        const delay = element.dataset.delay || 0;
        if (DISTANCE_WINDOW_TOP > DISTANCE_ELEMENT_TOP) {
            setTimeout(() => {
                element.classList.add('animated')
            }, delay);
        } else if (DISTANCE_WINDOW_TOP < DISTANCE_ELEMENT_TOP + element.offsetHeight) {
            element.classList.remove('animated')
        }
    })
}
animateElements()
window.addEventListener('scroll', animateElements)