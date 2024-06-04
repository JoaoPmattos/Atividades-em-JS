function soma(a, b) {
    let resultado = a + b;
    console.log(`o resultado é ${resultado}`);
    return;
}

function subtracao(a, b) {
    let resultado = a - b;
    console.log(`resultado da subtração é ${resultado}`);
    return;
}
function multiplicacao(a, b) {
    let resultado = a * b;
    console.log(`o resultado da multiplicação é ${resultado}`);
    return;
}
function divisao(a, b) {
    if (b == 0) {
        console.log('não é possivel dividir por 0')
    } else {
        let resultado = a / b;
        console.log(`o resultado da divisão é ${resultado}`);
        return;
    }
}


let v1 = parseInt(prompt('digite um valor!'))
let v2 = parseInt(prompt('digite outro valor'))
let escolha = parseInt(prompt(' selecione [1] para somar, [2] para subtrair, [3] para multiplicar e [4] para dividir!'));

switch (escolha) {
    case 1:
        soma(v1, v2);
        break;

    case 2:
        subtracao(v1, v2);
        break;
    case 3:
        multiplicacao(v1, v2);
        break;
    case 4:
        divisao(v1, v2);
        break;
    default:
        console.log('erro!')
        break;
}