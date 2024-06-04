let aux = 0;
let vet = [3, 5, 4, 2, 1, 6, 8, 7, 11, 9];
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 9; j++) {
        if (vet[j] < vet[j + 1]) {
            aux = vet[j]
            vet[j] = vet[j + 1]
            vet[j + 1] = aux
        }
    }
}
//vet.push(prompt('insira um ultimo valor'))
vet.push(0);
for (let i = 0; i < vet.length; i++) {
    console.log(vet[i]);
}

