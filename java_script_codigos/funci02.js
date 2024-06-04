
function media(a) {
    let resultadoM = 0;
    let mediano = 0;
    for (let contMed = 0; contMed < a.length; contMed++) {
        resultadoM = resultadoM + a[contMed];
        mediano = resultadoM / b;
    }
    console.log(`a media é ${mediano}`);
    return;
}

function MaiorNum(a) {
    let MaiorNum = 0;
    for (let contMai = 0; contMai < a.length; contMai++) {
        if (MaiorNum < a[contMai]) {
            MaiorNum = a[contMai];
        }
    }
    console.log(`a maior nota foi ${MaiorNum}`)
    return;
}

function MenorNum(a) {
    let MenorNum = 10
    for (let contMen = 0; contMen < a.length; contMen++)
        if (MenorNum > a[contMen]) {
            MenorNum = a[contMen];
        }
    console.log(`a menor nota foi ${MenorNum}`)
    return;
}
let nota = [];
let b = 0;
let escolha = 0;
let digitado = 0;
do {
    escolha = parseInt(prompt('selecione [1] para continuar, [2] para sair!'));
    if (escolha == 1) {
        digitado = parseInt(prompt('insira suas notas!'))

    } if (digitado >= 0) {
        nota[b] = digitado
        b++
    } else
        console.log('numero não identificado')
} while (escolha != 2);

MaiorNum(nota)
MenorNum(nota)
media(nota)
console.log(`todas as notas são ${nota}!`)