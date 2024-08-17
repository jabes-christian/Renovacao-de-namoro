function mostrarMensagemRenovação() {
    const secaoLogin = document.getElementById('secaoLogin');
    const secaoRenovação = document.getElementById('secaoRenovação');
    secaoLogin.classList.add('hidden');
    secaoRenovação.classList.remove('hidden');
}

function mostrarContrato() {
    const secaoRenovação = document.getElementById('secaoRenovação');
    const secaoContrato = document.getElementById('secaoContrato');
    const nomeUsuario = document.getElementById('nomeUsuario').value;
    
    secaoRenovação.classList.add('hidden');
    secaoContrato.classList.remove('hidden');

    document.getElementById('nomeContrato').textContent = nomeUsuario;
    document.getElementById('contratoParceiro').textContent = 'Seu(a) Namorado(a)';
}

function moverBotao() {
    if (!isMoving) {
        isMoving = true;
        moveButton(); // Move o botão imediatamente
        moveInterval = setInterval(moveButton, 100); // Move o botão a cada 100 milissegundos
    }
}

function pararMovimento() {
    isMoving = false;
    clearInterval(moveInterval);
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    // Gera novas posições aleatórias dentro da área visível
    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;
    const aleatorioX = Math.random() * maxX;
    const aleatorioY = Math.random() * maxY;
    
    // Define a nova posição do botão
    noButton.style.transform = `translate(${aleatorioX}px, ${aleatorioY}px)`;
}