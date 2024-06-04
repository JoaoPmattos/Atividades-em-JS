let valorA = [];
let valorB = [];
for (let cont = 0; cont < 10; cont++) {
    valorA[cont] = parseInt(prompt('digite 10 valores'));
}
for (let cont = 0; cont < valorA.length; cont++) {
    if (cont % 2 == 0) {
        valorB[cont] = valorA[cont] * 5
    } else {
        valorB[cont] = valorA[cont] + 5
    }
    console.log(valorB[cont]);
}