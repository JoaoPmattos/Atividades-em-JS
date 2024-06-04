let valor2 = 0
let valor = 0;
let contador = 0;
valor = parseInt(Math.random() * 100);

while (true) {
    valor2 = parseInt(prompt('insira um valor'))


    contador++


    if (valor2 > valor) {
        alert('o valor é menor!');


    } else if (valor2 < valor) {
        alert('o valor é maior');


    } else if (valor2 == valor) {
        alert('você acertou o valor!');
        alert(`voce obteve a quantidade de ${contador} de tentativas`)


        let valor3 = prompt('se deseja continuar, pressione [1] senão [2].')
        if (valor3 == 2) {
            alert('Obrigado por Jogar!')
            break;
        }
        else if (valor3 == 1) {
            contador = 0
            valor = parseInt(Math.random() * 100);
        }

        else {
            alert('erro!')
            break;
        }
    }
}
