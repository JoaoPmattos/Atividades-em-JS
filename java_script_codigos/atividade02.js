//INICIALIZE UM VETOR PARA TAREFAS, OBJETO CONTEM DESCRIÇÃO DO OBJETO E CRIAR STATUS EM BOOLEANO.
// 1- PERMITIR USUARIO ADICIONAR NOVAS TAREFAS A LISTA, USAR LOOP PARA QUE O USUARIO ADICIONE NOVAS TAREFAS, SOLICITE A DESCRIÇÃO DO OBJETO(OBJETO) E INICIALIZE COMO "NÃO CONCLUIDO"
//2- EXIBIR A LISTA DE TAREFAS, MOSTRANDO STATUS E DESCRIÇÃO DA TAREFA.
//3- PERMITIR QUE O USUARIO MARQUE A TAREFA COMO CONCLUIDA A PARTIR DA TAREFA DA LISTA, UTILIZANDO O INDICE DA LISTA QUE EXIBIR.
// 4- EXIBIR O NUMERO TOTAL DE TAREFAS PENDENTES, USANDO LOOP PARA CONTAR O TOTAL DE TAREFAS NO VETOR E EXIBA ESSE NUMERO.
//EXIBIR OPÇÃO PARA SAIR DO SISTEMA E CASO ALÉM, MSG " ERRO".

let tarefas = [];
let menu = 0;

do {
    menu = parseInt(prompt(`Pressione:
[1] para adicionar novas tarefas a lista!
[2] para exibir a lista de tarefas atual!
[3] para marcar conclusão em alguma tarefa!
[4] para exibir o numero total de tarefas não concluidas!
[5] para sair do sistema!`));

    switch (menu) {
        case 1:
            let nomeTarefa = prompt('insira o nome da tarefa!');
            let statu = false;
            const acao = {
                nomeTarefa: nomeTarefa,
                statu: statu


            };
            tarefas.push(acao);
            break;

        case 2:
            for (let cont = 0; cont < tarefas.length; cont++) {
                console.log(`a tarefa é ${tarefas[cont].nomeTarefa}, e o status dessa tarefa é pendente!!`);


            }
            break;
        case 3:
            for (let cont = 0; cont < tarefas.length; cont++) {
                let consul = parseInt(prompt('indique a tarefa que deseja'));
                consul = consul - 1
                if (consul === cont) {

                    alert(`a tarefa é ${tarefas[cont].nomeTarefa}!!`);

                    tarefas[cont].statu = parseInt(prompt('digite [1] para concluido e [2] para não concluido'));
                }
                else if (tarefas[cont].statu == 1) {
                    console.log(`tarefa ${tarefas[cont].nomeTarefa} concluida!`);
                    tarefas[cont].statu = true

                }
                else if (tarefas[cont].statu == 2) {
                    console.log(`tarefa ${tarefas[cont].nomeTarefa} pendente!`);
                    tarefas[cont].statu = false
                }
                else {
                    console.log('erro!')
                }
            }
            break;
        case 4:
            let total = 0;
            for (let cont = 0; cont < tarefas.length; cont++) {
                if (tarefas[cont].statu == false) {
                    total++;
                }
                else {
                    console.log('nenhuma tarefa pendente!');
                }
            }
            console.log(`o numero de tarefas não concluidas é de ${total}`);
            break;
        case 5:
            console.log('voce escolheu sair!');
            break;

        default:
            console.log('erro, opção invalido!');
            break;
    }
} while (menu !== 5);