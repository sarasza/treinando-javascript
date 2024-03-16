let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // + 1 para que o 10 seja considerado
let palpite = 1;

while (palpite != numeroAleatorio) {
    palpite = prompt("Adivinhe o número entre 1 e 10:");

    if (palpite == numeroAleatorio) {
        alert("Parabéns! Você acertou o número!");
    } else if (palpite < numeroAleatorio) {
        alert("Muito baixo! Tente novamente.");
    } else {
        alert("Muito alto! Tente novamente.");
    }
}
