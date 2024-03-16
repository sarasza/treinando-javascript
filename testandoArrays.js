const listaDeDestinos = new Array (`Fortaleza`, `Curitiba`, `São Paulo`)
for (i = 0; i < listaDeDestinos.length; i++) {
    console.log(listaDeDestinos[i])
}

listaDeDestinos.splice(1, 1)
console.log(listaDeDestinos)

listaDeDestinos.push(`Curitiba`)
console.log(listaDeDestinos)

console.log(listaDeDestinos[2])
