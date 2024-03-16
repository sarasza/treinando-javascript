// Achar o maior elemento

const listaDeNumeros = new Array (1, 2, 5, 20)
let vetor = listaDeNumeros[0]
for (let i = 0; i <= listaDeNumeros.length; i++) {
    if (vetor < listaDeNumeros[i]) {
        vetor = listaDeNumeros[i]
    }
}
console.log(vetor)
