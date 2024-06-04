/*
let nome = alert("Bem vindo a realidade do bostil!");
let a = parseInt(prompt("está preparado?digite 1 para SIM e 2 para NÃO"));

switch (a) {
    case 1:
        alert('vamos prosseguir, ok?')
        console.log("vamos prosseguir, ok?");
        break;
    case 2:
        alert('cancelado fi!')
        console.log("cancelado irmão!");
        break;
    default:
        alert('erro, escreve direito ai mermão')
        console.log("erro, escreve direito ai mermão")
        break;
}

let x = parseFloat(prompt("insira um valor real"));
let y = parseFloat(prompt('insira outro valor real'));
let z = parseFloat(prompt('insira outro valor!'));

let soma = x + y + z;
console.log(`a sua soma resultou em ${soma}!`);
let media = soma / 3;
console.log(`você achou a sua media salarial,resultando em ${media} parabens pelo salario infeliz!`);
*/

//Faça um programa que peça dois números e verifique (usando if e else) e imprima o maior deles  
/*
let x = parseInt(prompt('insira um valor, por favor!'));
let y =parseInt(prompt('insira outro valor, por favor!'));
 
if (x>y) {
    console.log (`o numero de maior valor foi ${x} !!!`);
} else {
    console.log (`o numero de maior valor foi ${y} !!!`)
    
}
*/
//Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo  
/*
let x =parseInt(prompt('insira um valor por favor!'));
if (x>=0) {
    console.log(`o numero ${x} é positivo!`)
} else {
    console.log(`o numero ${x} é negativo!`)
}
*/

/*
Faça um programa para a leitura de duas notas parciais de um aluno.  

A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete;
A mensagem “Aprovado com Distinção”, se a média for igual a dez;
A mensagem “Reprovado” se a média for menor de do que sete;
*/

let nota1 = parseInt(prompt('insira sua primeira nota!'));
let nota2 = parseInt(prompt('insira sua segunda nota por favor!'));
let media = (nota1 + nota2) / 2
if (media >= 7) {
    alert(`o aluno(a) foi aprovado com ${media} e por isso passou de ano!`);
} else if (media == 10) {
    alert(`o aluno foi aprovado com ${media} e por isso foi um aluno(a) com distinção!`);

} else {
    alert(`o aluno(a) não atingiu media, ficando com ${media}, não suficiente e por isso foi reprovado!!`);
}