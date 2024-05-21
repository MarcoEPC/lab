document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.getElementById('btnmenu');
    const btnFechar = document.getElementById('btnfechar');
    const menu = document.getElementById('menu');
    const main = document.querySelector('main'); // Presumindo que o elemento principal é um <main>

    function toggleMenu(isOpening) {
        if (isOpening) {
            menu.style.display = 'block';
            main.style.display = 'none';
        } else {
            menu.style.display = 'none';
            main.style.display = 'block';
        }
    }

    btnMenu.addEventListener('click', () => toggleMenu(true));
    btnFechar.addEventListener('click', () => toggleMenu(false));
});
