let moveInterval;
let isMoving = false;
let noButton = document.getElementById('noButton');
let container = document.querySelector('.container');
let containerRect = container.getBoundingClientRect();

function login() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const senhaCorreta = 'diguinho';

    if (senha === senhaCorreta && usuario.trim() !== '') {
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

// Adiciona os eventos de mouse ao botão "Não"
noButton.addEventListener('mouseover', moverBotao);
noButton.addEventListener('mouseleave', pararMovimento);