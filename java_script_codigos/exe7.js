let nome = prompt('insira seu nome');
let A = parseFloat(prompt('insira a primeira nota'));
let B = parseFloat(prompt('insira a segunda nota'));
let C = parseFloat(prompt('insira a terceira nota'));
let media;
media = (A + B + C) / 3;


console.log(`o aluno de nome ${nome}, obteve media de ${media} e sua situação atual é:`)


if (media >= 7) {
    console.log('aluno aprovado!');
}
else if (media > 2) {
    console.log('aluno de recuperação!')
}
else {
    console.log('aluno reprovado!')
}
