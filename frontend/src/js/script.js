const naomario = document.querySelector('.naomario');
const tubo = document.querySelector('.tubo');

const pulando = () => naomario.classList.contains('pulo');

const pulo = (event) => {
    if (event.code !== 'Space' && event.code !== 'ArrowUp' && event.code !== 'KeyW') return;
    event.preventDefault();
    if (pulando()) return;

    naomario.classList.add('pulo');
};

const loop = setInterval(() => {

    const tuboPosicao = tubo.offsetLeft;
    const naomarioPosicao = +window.getComputedStyle(naomario).bottom.replace('px', '');

    // Essa condicional controla o fator de vitória/derrota do jogo
    // Quando o tubo está menor que a posição 120 e mario está menor que a posição vertical 75, o jogo acaba
    if (tuboPosicao <= 120 && naomarioPosicao < 75 && tuboPosicao > 0) {
        tubo.style.animation = 'none';
        tubo.style.right = window.getComputedStyle(tubo).right;

        naomario.style.animation = 'none';
        naomario.style.bottom = '0px';

        naomario.src = './src/assets/images/game-over.png';

        clearInterval(loop);
    }

}, 10);

naomario.addEventListener('animationend', () => {
    naomario.classList.remove('pulo');
});

document.addEventListener('keydown', pulo);