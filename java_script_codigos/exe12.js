let nulo = 0;
let marcia = 0;
let maria = 0;
let jose = 0;
let quant = prompt('insira quantas pessoas irão votar');
for (contador = 1; contador <= quant; contador++) {
    let voto = prompt("digite 11 para josé, digite 22 para maria, digite 33 para marcia e 0 para nulo")
    switch (voto) {
        case "11":
            console.log("1 voto para José");
            jose++
            break;
        case "22":
            console.log("1 voto para Maria");
            maria++
            break;
        case "33":
            console.log("1 voto para Marcia");
            marcia++
            break;
        case "0":
            console.log("1 voto nulo");
            nulo++
            break;
        default:
            console.log("voto não identificado");
            break;
    }
}
if (jose > maria && jose > marcia) {
    console.log('josé venceu!');
    console.log(`o candidato josé ficou com ${jose}, a candidata Maria ficou com ${maria}, a candidata Marcia ficou com ${marcia}!!`);
}
else if (maria > jose && maria > marcia) {
    console.log('Maria venceu!!');
    console.log(`o candidato josé ficou com ${jose}, a candidata Maria ficou com ${maria}, a candidata Marcia ficou com ${marcia}!!`);
}
else if (marcia > jose && marcia > maria) {
    console.log("Marcia venceu!");
    console.log(`o candidato josé ficou com ${jose}, a candidata Maria ficou com ${maria}, a candidata Marcia ficou com ${marcia}!!`);
}
else {
    console.log('empate!')
}

