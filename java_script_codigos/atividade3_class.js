class Tarefas {
    constructor() {
        this.tarefa = [];
    }
} function adicionarNovoItem() {
    let nomeTarefa = prompt('insira o nome da tarefa!');
    let statu = false;
    const tarefa = {
        nomeTarefa: nomeTarefa,
        statu: statu
    }
    tarefas.push(tarefa);
}
function exibirLista() {
    console.log("Aqui está a lista de tarefas:");
    for (let cont = 0; cont < tarefas.length; cont++) {
        if (tarefas[cont].statu == false) {
            console.log(`a tarefa é ${tarefas[cont].nomeTarefa}, e o status dessa tarefa é pendente!! O numero da tarefa é ${cont + 1}`);
        }
        else if (tarefas[cont].statu == true) {
            console.log(`a tarefa é ${tarefas[cont].nomeTarefa}, e o status dessa tarefa é concluida!! O numero da tarefa é ${cont + 1}`);
        }
    }
}
function conclusaoTarefa() {
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
}
function exibirFuncao() {
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
}
function encerrar() {
    console.log('você escolheu sair!')
}

do {
    menu = parseInt(prompt(`Pressione:
[1] para adicionar novas tarefas a lista!
[2] para exibir a lista de tarefas atual!
[3] para marcar conclusão em alguma tarefa!
[4] para exibir o numero total de tarefas não concluidas!
[5] para sair do sistema!`));

    switch (menu) {
        case 1:
            function adicionarNovoItem() {
                console.log(adicionarNovoItem);
            }
            break;
        case 2:
            function exibirLista() {
                console.log(exibirLista);
            }
            break;
        case 3:
            function conclusaoTarefa() {
                console.log(conclusaoTarefa);
            }
            break;
        case 4:
            function exibirFuncao() {
                console.log(exibirFuncao);
            }
            break;
        case 5:
            function encerrar() {
                console.log('você decidiu sair!');
            }
            break;
        default:
            console.log('erro, opção invalido!');
            break;
    }
} while (menu !== 5);