function menu(){
const menuBtn = document.querySelector('.menu-mobile')
const navMenu = document.querySelector('.nav-menu')

function openMenu() {
    navMenu.classList.toggle('ativo');
    if (navMenu.classList.contains('ativo')) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>'
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>'
    }
}

menuBtn.addEventListener('click', openMenu)
}
menu()

function search() {
const searchBtn = document.querySelector('.btn-search')
const searchInput = document.querySelector('.form-search')

searchBtn.addEventListener('click', () => searchInput.classList.toggle('ativo'))
window.addEventListener('click', (e) => {
    const input = searchInput.querySelector('input')
    if (e.target !== searchInput && e.target !== searchBtn && e.target !== input) {
        searchInput.classList.remove('ativo')
    }
})  
}

search()


function headerScroll(){

const header = document.querySelector('.header')

function headerColor() {
   if (window.pageYOffset > 0) {
       header.classList.add('ativo')
   } else {
       header.classList.remove('ativo')
   }
}

window.addEventListener('scroll', headerColor)
}

headerScroll()


function funcionamento() {
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

funcionamento()

