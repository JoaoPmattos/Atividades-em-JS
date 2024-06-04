let nome = [];
let idade = [];
for (let cont = 0; cont < 2; cont++) {
    nome[cont] = prompt('insira um nome');
    idade[cont] = parseInt(prompt('insira umm valor'));
}
for (let cont = 0; cont < nome.length; cont++) {
    if (idade[cont] >= 21) {
        console.log(nome[cont]);
        console.log(idade[cont]);
    }
}