document.addEventListener('DOMContentLoaded', function () {
    let btnMenu = document.getElementById('btnmenu');
    let btnFechar = document.getElementById('btnfechar');
    let menu = document.getElementById('menu');

    function toggleMenu(isOpening) {
        let animationName = isOpening ? 'slideIn 0.5s' : 'slideOut 0.5s';
        menu.style.animation = animationName;
        menu.classList.toggle('show', isOpening);
        menu.classList.toggle('hide', !isOpening);
        main.style.display = isOpening ? 'none' : 'block';
        if (!isOpening) {
            setTimeout(function () {
                menu.style.display = 'none';
            }, 500);
        }
    }

    btnMenu.addEventListener('click', function () {
        menu.style.display = 'block';
        toggleMenu(true);
    });

    btnFechar.addEventListener('click', function () {
        toggleMenu(false);
    });
});