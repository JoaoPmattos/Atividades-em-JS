//DOIS VALORES
//USUARIO ESCOLHE OPERAÇÃO
//EXIBIR NO FINAL

let A = parseFloat(prompt('escreva o primeiro valor'))
let B = parseFloat(prompt("escreva o segundo o valor"))
let opera = prompt("insira 1 para soma, 2 para subtração, 3 para divisão, 4 para multiplicação")
switch (opera) {
    case "1":
        console.log(A + B)
        break;
    case "2":
        console.log(A - B)
        break;
    case "3":
        if (B == 0) {
            console.log("erro, não se pode dividir por zero");
        }
        else {
            console.log(A / B);
        }
        break;
    case "4":
        console.log(A * B);
        break;
    default:
        console.log("comando invalido");
}
console.log("fim");