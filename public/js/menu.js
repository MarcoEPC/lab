document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('navbar-solid-bg');

    if (!menuButton || !menu) {
        console.warn('Elementos necessários não encontrados no DOM.');
        return;
    }

    menuButton.addEventListener('click', function() {
        toggleMenuVisibility(menu);
    });

    function toggleMenuVisibility(menu) {
        menu.classList.toggle('hidden');
    }
});


