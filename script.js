let moveInterval;
let isMoving = false;
let noButton = document.getElementById('noButton');
let container = document.querySelector('.container');
let containerRect = container.getBoundingClientRect();

function login() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const senhaCorreta = 'diguinho';

    if (senha.toLowerCase() === senhaCorreta.toLowerCase() && usuario.trim() !== '') {
        // Mostrar a tela de renovação
        document.getElementById('secaoLogin').classList.add('hidden');
        document.getElementById('secaoRenovação').classList.remove('hidden');
    } else {
        // Mostrar a tela de erro
        document.getElementById('secaoLogin').classList.add('hidden');
        document.getElementById('secaoError').classList.remove('hidden');
    }
}

function mostrarContrato() {
    const secaoRenovação = document.getElementById('secaoRenovação');
    const secaoContrato = document.getElementById('secaoContrato');
    const usuario = document.getElementById('usuario').value;
    
    secaoRenovação.classList.add('hidden');
    secaoContrato.classList.remove('hidden');

    document.getElementById('nomeContrato').textContent = usuario;
    document.getElementById('contratoParceiro').textContent = 'Jabes Christian M. S. Pinto';
}

function moverBotao(event) {
    if (!isMoving) {
        isMoving = true;
        moveButton(event); // Move o botão imediatamente
        moveInterval = setInterval(moveButton, 100); // Move o botão a cada 100 milissegundos
    }
}

function pararMovimento() {
    isMoving = false;
    clearInterval(moveInterval);
}

function moveButton(event) {
    const noButtonRect = noButton.getBoundingClientRect();

    // Define as dimensões máximas e mínimas para a nova posição
    const maxX = containerRect.width - noButtonRect.width;
    const maxY = containerRect.height - noButtonRect.height;
    
    let aleatorioX, aleatorioY;

    do {
        // Gera novas posições aleatórias dentro da área visível
        aleatorioX = Math.random() * maxX;
        aleatorioY = Math.random() * maxY;
    } while (isCursorCloseToButton(event.clientX, event.clientY, aleatorioX + noButtonRect.width / 2, aleatorioY + noButtonRect.height / 2));

    // Define a nova posição do botão
    noButton.style.transform = `translate(${aleatorioX}px, ${aleatorioY}px)`;
}

function isCursorCloseToButton(cursorX, cursorY, botaoX, botaoY) {
    const distancia = Math.sqrt((cursorX - botaoX) ** 2 + (cursorY - botaoY) ** 2);
    return distancia < 100; // Distância mínima para o cursor
}

function voltaLogin() {
    // Voltar para a tela de login
    document.getElementById('secaoError').classList.add('hidden');
    document.getElementById('secaoLogin').classList.remove('hidden');
    // Limpar campos de input
    document.getElementById('usuario').value = '';
    document.getElementById('senha').value = '';
}

function mostrarDica() {
    // Exibe a dica de senha ao focar no campo de senha
    document.getElementById('dicaSenha').classList.remove('hidden');
}

// Adiciona os eventos de mouse ao botão "Não"
noButton.addEventListener('mouseover', moverBotao);
noButton.addEventListener('mouseleave', pararMovimento);


// Nova funcionalidade para o botão "Prosseguir" e a seção de imagens
document.getElementById('prosseguirButton').addEventListener('click', function() {
    // Oculta a seção do contrato e mostra a seção de imagens
    document.getElementById('secaoContrato').classList.add('hidden');
    document.getElementById('secaoImagens').classList.remove('hidden');
    
    // Inicia o loop de imagens
    iniciarLoopImagens();
});

// Array de imagens
const imagens = [
    'fotos/20240122_205515.jpg', // img 1
    'fotos/20240128_194643.jpg', // img 2
    'fotos/20240329_172338.jpg', // img 3
    'fotos/20240809_193527.jpg', // img 4
    'fotos/20241102_193636(0).jpg', // img 5
    'fotos/IMG_20240329_171656_960.jpg', // img 6
    'fotos/IMG-20240504-WA0004.jpg', // img 7
    'fotos/IMG-20240504-WA0009.jpg', // img 8
    'fotos/IMG-20240524-WA0052.jpg', // img 9
    'fotos/IMG-20240526-WA0017.jpg', // img 10
    'fotos/IMG-20240612-WA0065.jpg', // img 11
    'fotos/IMG-20240616-WA0017.jpg', // img 12
    'fotos/IMG-20240711-WA0021.jpg', // img 13
    'fotos/IMG-20240804-WA0040.jpg', // img 14
    'fotos/IMG-20240809-WA0042.jpg', // img 15
    'fotos/IMG-20240822-WA0037.jpg', // img 16
    'fotos/IMG-20240914-WA0061.jpg', // img 17
    'fotos/IMG-20240914-WA0070.jpg', // img 18
    'fotos/IMG-20241006-WA0032.jpg', // img 19
    'fotos/IMG-20241030-WA0024.jpg', // img 20
    'fotos/IMG-20241102-WA0044.jpg', // img 21
    'fotos/IMG-20241208-WA0019.jpg', // img 22
    'fotos/IMG-20241228-WA0058.jpg', // img 23
    'fotos/IMG-20241228-WA0132.jpg', // img 24
    'fotos/Screenshot_20240126_230047_Instagram.jpg', // img 25
];

let indiceImagemAtual = 0;

// Função para exibir a próxima imagem
function mostrarImagem() {
    const imagemAtual = document.getElementById('imagemAtual');
    imagemAtual.style.opacity = 0; // Inicia com a imagem invisível para o efeito de transição

    setTimeout(() => {
        // Atualiza a imagem com a próxima no array
        imagemAtual.src = imagens[indiceImagemAtual];
        imagemAtual.style.opacity = 1; // A imagem agora ficará visível

        // Atualiza o índice da próxima imagem (circular)
        indiceImagemAtual = (indiceImagemAtual + 1) % imagens.length;
    }, 500); // Espera meio segundo para aplicar o efeito de transição
}

// Função para iniciar o loop de imagens
function iniciarLoopImagens() {
    mostrarImagem(); // Mostra a primeira imagem imediatamente
    setInterval(mostrarImagem, 3000); // Altera a imagem a cada 3 segundos
}
