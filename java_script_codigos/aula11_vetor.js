// /*
// //CRIAÇÃO DE VETOR
// //o indice é definido automaticamente começando no 0
// let pokemon = ['squirtle', 'charmander', 'bulbassaur'];
// //IMPRESSÃO MANUAL NO CONSOLE CADA ITEM EM UMA LINHA
// console.log(pokemon[0]);
// console.log(pokemon[1]);
// console.log(pokemon[2]);
// //IMPRESSÃO MANUAL DE TODOS OS ITENS NA MESMA LINHA
// console.log(pokemon[0], pokemon[1], pokemon[2]);
// //IMPRESSÃO ATRAVES DE UM LAÇO DE REPETIÇÃO
// for (let cont = 0; cont < pokemon.length; cont++) {
//     console.log(pokemon[cont]);
// }
// */



// //DECLARAÇÃO DO VETOR E LEITURA ATRAVES DO PROMPT
// let nome = [];
// for (let cont = 0; cont < 2; cont++) {
//     nome[cont] = prompt('digite nomes')
// }
// //IMPRESSnomeRAVESnomeM LAÇO DE REPETInomeINHA POR LINHA
// for (let cont = 0; cont < nome.length; cont++) {
//     console.log(nome[cont])
// }
// //IMRPRESSÃO DE TODO O CONTEUDO
// console.log(nome);

// //.push()adiciona item no final do array;
// nome.push(prompt('insira um valor no fim'));
// nome.push('seuNome');
// console.log(nome);

// //.unshift() //add item no inicio do array
// nome.unshift(prompt('insira um valor no inicio'));
// nome.unshift('seuNome');
// console.log(nome);

// //.pop()//remove item no final do array:
// nome.pop()
// console.log(nome);

// //.shift()//remove item no inicio do array:
// nome.shift();
// console.log(nome);

// //.indexOf()//retorna o indice de um valor;
// console.log(nome.indexOf('senac'));



//CRIAÇÃO DE UM VETOR DO TIPO MATRIZ
// let valores = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // //IMPRESSÃO POR LINHA NO CONSOLE
// // console.log(valores[2]);
// // //IMPRESSÃO INDIVIDUAL NO CONSOLE
// // console.log(valores[1][1]);
// // console.log(valores[0][2]);
// // console.log('');

// for (let x = 0; x < valores.length; x++) {
//     for (let y = 0; y < valores.length; y++) {
//         console.log(valores[y]);
//     }
//     console.log('');
// }


//CRIAÇÃO DE UM VETOR DO TIPO MATRIZ COM VALORES ALEATORIOS
let timePokemon = [
    ['pikachu', 'M', 1],
    ['charmander', 'F', 3],
];

console.log(`O pokemon ${timePokemon[1][0]} é do sexo ${timePokemon[1][1]} e está no nivel ${timePokemon[1][2]}`)