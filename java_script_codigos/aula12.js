// // //CRIAÇÃO DE OBJETO VETOR DO TIPO LISTA
// // //a diferença é que o inidice é definido manualmente
// // const convidado = {
// //     nome: "pedrinho",
// //     idade: 10,
// //     presente: 'quebra cabeça',
// //     aluno: true
// // }

// // //IMPRESSÃO DO OBJETO VETOR DO TIPO LISTA
// // console.log(`${convidado.nome} tem ${convidado.idade} anos e trouxe um ${convidado.presente} de presente!`)



// //CRIAÇÃO DAS VARIAVEIS QUE SERÃO USADOS NA LISTA
// const nome = prompt('digite seu nome');
// const idade = parseInt(prompt('digite sua idade'));
// const presente = prompt('qual seu presente');
// //CRIAÇÃO DE OBJETO VETOR DO TIPO LISTA
// const convidade2 = {
//     nome: nome,
//     idade: idade,
//     presente: presente
// }
// console.log(`${convidade2.nome} tem ${convidade2.idade}anos e trouxe um ${convidade2.presente}de presente!`);


let festa = [];
for (let index = 0; index < 2; index++) {
    const nomes = prompt('digite seu nome');
    const idades = parseInt(prompt('digite sua idade'));
    const presentes = prompt('qual o seu presente');

    const convidados = {
        nomes: nomes,
        idades: idades,
        presentes: presentes
    }
    festa.push(convidados);
}

for (let index = 0; index <festa.length; index++) {
    console.log(`${festa[index].nomes} tem ${festa[index].idades} anos e trouxe um ${festa[index].presentes} de presente!`);
}