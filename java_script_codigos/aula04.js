let nome = 'João';
let sobrenome = 'Pedro';

//com as strings conseguimos utilizar alguns métodos

//concat - concatenar (juntar) strings
let juntar = nome.concat(sobrenome);
let juntar2 = `${nome} ${sobrenome}`;

console.log(juntar)
console.log(juntar2)

//length - conta o tamanho da string
console.log(juntar.length)

//[] - exibe o conteudo da string de acordo com o indice
console.log(nome[0]);

//split - separa a string em partes
console.log(juntar2.split(""))
console.log(juntar2.split(" "))

//includes (lógico) - procura dentro da string um determinado conteúdo
console.log(juntar2.includes("tudo"))

//startsWith - verifica se a string inicia com determinado valor
console.log(juntar2.startsWith('J'))

//endsWith - verifica se a string termina com um determinado conteúdo
console.log(juntar2.endsWith('o'))

//replace - substitui um conteudo de uma string por outro
console.log(juntar2.replace("Pedro", "KKKKK"))

//math - metodos para variaveis do tipo number
let valores = 10.66;
console.log(Math.floor(valores))
console.log(Math.ceil(valores))