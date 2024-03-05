window.document.getElementById('menumobileopen').style.display = 'none'
window.document.getElementById('menumobileclose').style.display = 'none'

//Funcao para abrir o menu e trocar os icones
function abrirMenu() {
    var menu = window.document.getElementById('mobile')
    menu.style.display = 'block'
    var iconeAbrir = window.document.getElementById('menumobileopen')
    iconeAbrir.style.display = 'none'
    var iconeFechar = window.document.getElementById('menumobileclose')
    iconeFechar.style.display = 'block'
}

//Funcao para fechar o menu e trocar os icones
function fecharMenu() {
    var menu = window.document.getElementById('mobile')
    menu.style.display = 'none'
    var iconeFechar = window.document.getElementById('menumobileclose')
    iconeFechar.style.display = 'none'
    var iconeAbrir = window.document.getElementById('menumobileopen')
    iconeAbrir.style.display = 'block'
}
