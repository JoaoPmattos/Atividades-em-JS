let nome = prompt("insira seu nome")
console.log (`seu nome é ${nome}`)
let sal = parseFloat(prompt("insira o seu salario fixo"))
let total = parseFloat(prompt("insira o total de vendas efetuadas no mês"))
let comi = 0.15 * total
let sal2 = comi+sal
console.log (`${nome} possui um salario fixo de ${sal} e obteve um salario final no mês de ${sal2}`)
