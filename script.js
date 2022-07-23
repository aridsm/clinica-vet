function funcionamento() {
    const aberto = document.querySelector('.entrada__aberto-fechado')
    setInterval(horarioFuncionamento, 1000)

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
                styleAberto('Fechado agora', 'fechado')
            }
        } else {
            styleAberto('Fechado agora', 'fechado')
        }

    }
    function styleAberto(txt, dataType) {
        aberto.textContent = txt;
        aberto.dataset.open = dataType;
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

/* Slide */

const containerSlide = document.querySelector('.profissionais__lista')
const btnProx = document.querySelector('.btn-prox')
const btnAnt = document.querySelector('.btn-ant')
let itemsPerSlide = 4;
let slideIndex = 0;

function disableOrEnableButton() {
    btnAnt.classList.remove('disabled');
    btnProx.classList.remove('disabled');
    if (slideIndex === 0) {
        btnAnt.classList.add('disabled')
    } else if (slideIndex === containerSlide.children.length - itemsPerSlide) {
        btnProx.classList.add('disabled')
    }
}

function moveSlide(width) {
    containerSlide.style.transform = `translateX(-${width * slideIndex}px)`;
}

function getMeasuresSlide() {
    const slideItem = document.querySelectorAll('.profissionais__lista li')[1];
    const slideItemWidth = slideItem.getBoundingClientRect().width;
    const slideItemMargin = parseFloat(getComputedStyle(slideItem).marginLeft)
    const slideDragWidth = slideItemWidth + slideItemMargin;
    disableOrEnableButton()
    moveSlide(slideDragWidth)
}

function changeSlidesPerPage() {
    if (window.innerWidth >= 690) {
        itemsPerSlide = 4
    }
    if (window.innerWidth < 690) {
        itemsPerSlide = 3
    }
    if (window.innerWidth < 480) {
        itemsPerSlide = 2
    }
    if (window.innerWidth < 400) {
        itemsPerSlide = 1
    }
    slideIndex = 0;
    disableOrEnableButton()
    moveSlide(0);
}
changeSlidesPerPage()
btnProx.addEventListener('click', (e) => {
    const btnDisabled = e.currentTarget.classList.contains('disabled');
    if (btnDisabled) return;
    ++slideIndex;
    getMeasuresSlide()
})
btnAnt.addEventListener('click', (e) => {
    const btnDisabled = e.currentTarget.classList.contains('disabled');
    if (btnDisabled) return;
    --slideIndex;
    getMeasuresSlide()
})
window.addEventListener('resize', changeSlidesPerPage)
