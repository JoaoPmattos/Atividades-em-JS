//ESTRUTURA DE DECISÃO ESCOLHA/CASO
let dia = prompt('insira o dia da semana');
//mudar para outros dias para testar

switch (dia) {
    case "segunda":
        console.log("dia de começar a semana com energia!");
        break;
    case 'terça':
        console.log("hora de aprender coisas novas");
        break;
    case "quarta":
        console.log("hora de ficar animado")
        break;
    case "quinta":
        console.log('quase lá')
        break;
    case "sexta":
        console.log("sextou")
        break;
        default:
            console.log ("sossego 🤪😷😱");
}