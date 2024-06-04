// //DEFINIÇÃO BASICA DE UMA FUNÇÃO:
// //VARIAVEIS CRIADAS DENTRO DE FUNÇÕES SÓ PODEM SER USADAS DENTRO DAS MESMAS?


// function nome(parametros) {
//     //INSTRUÇÕES
//     return; //VALOR DO RETORNO
// }
// //QUANDO INVOCAMOS O RETURN, A FUNÇÃO PASSA A SER EXECUTADA.00



// //EXEMPLO 1
// function soma(a, b) {
//     let resultado = a + b;
//     console.log(`O resultado é: ${resultado}`);
//     return;
// }

// let v1 = parseInt(prompt('digite um valor'))
// let v2 = parseInt(prompt('digite outro valor!'))
// soma(v1, v2);


// //EXEMPLO 2
// function soma(a, b) {
//     let resultado = a + b;
//     return resultado;
// }

// let v1 = parseInt(prompt('digite um valor'));
// let v2 = parseInt(prompt('digite outro valor'))
// console.log(soma(v1, v2));

//2- FUNÇÃO ANONIMA
//UMA VARIAVEL PODE ARMAZENAR UMA FUNÇÃO

// const soma = function (a, b) {
//     return a + b;
// }

// let v1 = parseInt(prompt('digite um valor'))
// let v2 = parseInt(prompt('digite outro valor!'))
// console.log(soma(v1, v2));



//**3-callbacks */
//UMA FUNÇÃO PASSADA COMO ARGUMENTO PARA OUTRA.
// //O OBJETIVO DO RECURSO É NÃO BLOQUEAR A EXECUÇAÇÃO DO CODIGO ENQUANTO OUTRA ATIVIDADE É EXECUTADA.
// function soma(a, b, call) {
//     let op = a + b;
//     call(op);
// }
// function multiplicacao(a, b, cb) {
//     let op = a * b;
//     cb(op);
// }

// function exibir(valor) {
//     console.log(`o resultado do calculo é ${valor}`)

// }
// soma(2, 5, exibir)
// multiplicacao(2, 5, exibir)


// const mensagem = function () {
//     console.log('essa mensagem é exibida depois de 5 segundos!');

// }
// setTimeout(mensagem, 5000);
// //settimeout - chama uma função ou avalia uma expressão de um certo tempo
// console.log('eu sou o joao')



// let v1 = parseInt(prompt('digite um valor'))
// let v2 = parseInt(prompt('digite outro valor'))
// console.log(soma(v1, v2));
// console.log(multiplicacao(v1, v2));

// **4-ARRAYS(VETOR) */
// **SPREAD: UMA FORMA DE LIDAR SEPARADAMENTE COM ELEMENTOS */
// O QUE ERA PARTE DE UM ARRAY SE TORNA UM ELEMENTO INDEPENDENTE
// function soma(x, y, z) {
//     return x + y + z;
// }
// const numeros = [10, 20, 30];
// console.log(soma(numeros[0],numeros[1],numeros[2]));//sem spread
// console.log(soma(...numeros));//SPREAD




//**REST:COMBINA OS ARGUMENTOS EM UM ARRAY */
//O QUE ERA UM ELEMENTO INDEPENDENTE SE TORNA PARTE DE UM VETOR

// function confereTamanho(...valor) {
//     console.log(valor.length);
// }
// confereTamanho(1);
// confereTamanho(1,2);
// confereTamanho(1,2,3,4);