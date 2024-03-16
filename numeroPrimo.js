let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // + 1 para que o 10 seja considerado
let palpite = prompt("Informe um número entre 1 e 10:");

let n = true;
for(let i = 2; i < palpite; i++) {
    if(palpite % i === 0) {
        n = false;
        break;
    }
}

if(n && palpite > 1) {
    alert("É um número primo");
} else {
    alert("Não é um número primo");
}