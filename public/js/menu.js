document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btnmenu');
    const btnFechar = document.getElementById('btnfechar');
    const menu = document.getElementById('menu');
    const main = document.querySelector('main'); // Assumindo que o elemento principal é um <main>

    if (!btnMenu || !btnFechar || !menu || !main) {
        console.error('Erro: Um ou mais elementos não foram encontrados.');
        return;
    }

    function toggleMenu(isOpening) {
        menu.style.display = isOpening ? 'block' : 'none';
        main.style.display = isOpening ? 'none' : 'block';
    }

    btnMenu.addEventListener('click', () => {
        toggleMenu(true);
    });

    btnFechar.addEventListener('click', () => {
        toggleMenu(false);
    });
});