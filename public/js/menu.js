document.addEventListener('DOMContentLoaded', () => {
    ['btnmenu', 'btnfechar'].forEach((id, i) => {
        document.getElementById(id).addEventListener('click', () => {
            let isOpening = i === 0;
            document.getElementById('menu').style.display = isOpening ? 'block' : 'none';
            if (document.getElementById('main')) {
                document.getElementById('main').style.display = isOpening ? 'none' : 'block';
            }
        });
    });
});

