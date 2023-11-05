// Animação para ir para cada session
$(document).ready(function () {
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800, // Adjust the scroll speed (in milliseconds)
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
});

// mostra o botão escondido
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-top').style.display = 'block';
    } else {
        document.getElementById('back-to-top').style.display = 'none';
    }
}

// Volta para o topo
document.getElementById('back-to-top').onclick = function () {
    smoothScrollTop();
};

function smoothScrollTop() {
    const currentY = window.scrollY;
    const step = Math.floor(currentY / 20);
    
    const scrollInterval = setInterval(function () {
        if (window.scrollY > 0) {
            window.scrollBy(0, -step);
        } else {
            clearInterval(scrollInterval);
        }
    }, 16); // 60 frames per second
}