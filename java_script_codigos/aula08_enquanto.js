//LAÇO DE REPETIÇÃO ENQUANTO
let jogadas = 0;
let cara = false;

while (!cara) {
    jogadas++;
    //MATH.RANDOM RETORNA UM VALOR ALEATORIO ENTRE 0 E 1
    //valor=parseint(math.random()*100;


    
    cara = Math.random() < 0.1;
    console.log(Math.random());
}
console.log(`a moeda caiu cara apos ${jogadas} jogadas!`);