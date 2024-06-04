let nota = 0;
let maior = 0;
let media = 0;
let soma = 0;
let menor = 0;
let cont = 0;
do {
    nota = parseInt(prompt('digite um valor'));
    console.log(`voce digitou o numero ${nota}.`);
    if (nota >= 0) {
        cont++;
        soma = nota + soma
        if (nota > maior) {
            maior = nota;
        }
        if (menor <= 0) {
            menor = nota;
        }
        if (nota < menor) {
            menor = nota;
        }
    }
    media = soma / cont;
} while (nota > 0);

console.log(`o maior numero foi ${maior}
o menor numero foi ${menor}
a soma dos valores foi ${soma}
a media dos valores é ${media}`);


