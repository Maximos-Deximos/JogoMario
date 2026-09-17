const naomario = document.querySelector('.naomario');
const tubo = document.querySelector('.tubo')

const pulo = () => {
    naomario.classList.add('pulo');

    setTimeout(() => {
    
        naomario.classList.remove('pulo');
    }, 500);
}

const loop = setInterval(() => {

    const tuboPosicao = tubo.offsetLeft;
    console.log(tuboPosicao)
    const naomarioPosicao = +window.getComputedStyle(naomario).bottom.replace('px', '');
    console.log(naomarioPosicao)

    if (tuboPosicao <= 120 && naomarioPosicao < 75 && tuboPosicao > 0) {
        tubo.style.animation = 'none';
        tubo.style.animation `$(tuboPosicao)px;`

        naomario.style.animation = 'none';
        naomario.style.bottom = `$(naoMarioPosicao)px`;

        naomario.src = './src/assets/images/game-over.png';

        clearInterval(loop);
    }


}, 10)


document.addEventListener("keydown", pulo);

