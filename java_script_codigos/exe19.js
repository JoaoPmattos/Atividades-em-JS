let valorA = [];
for (let cont = 0; cont < 8; cont++) {
    valorA[cont] = prompt(`digite o nome na posição ${cont + 1}`);
}
let busca = prompt('selecione um nome para busca')
for (let cont = 0; cont < valorA.length; cont++) {
    if (valorA[cont] == busca) {
        console.log(`nome encontrado na posição ${cont + 1}!!`)
    } else {
        console.log('nome não encontrado!');
    }
}