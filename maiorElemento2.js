// Achar o maior elemento

const listaDeNumeros = new Array ('1', '2', '5', '20')
let vetor = parseInt(listaDeNumeros)
for (let i = 0; i <= listaDeNumeros.length; i++) {
    if (vetor < parseInt(listaDeNumeros[i])) {
        vetor = parseInt(listaDeNumeros[i])
    }
}
console.log(vetor)
