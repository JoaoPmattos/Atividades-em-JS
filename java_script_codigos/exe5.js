//A E B
//A=B E B=A
//EXIBA AS DUAS TROCADAS A=B, B=A
let A =parseFloat(prompt ('insira um valor para A:'))
let B =parseFloat(prompt('insira o valor para B:'))
let C = A;
A = B;
B = C;
console.log(`o valor de A é ${A}, e o valor de B é ${B}!!`)