for (let contador = 1; contador <= 12; contador++) {
    let idade = parseInt(prompt("insira sua idade"));
    console.log(`${idade} na posição ${contador}`);
    if (idade >= 18) {
        alert("você é maior de idade");
    }
    else {
        alert('você é menor de idade');
    }


}
