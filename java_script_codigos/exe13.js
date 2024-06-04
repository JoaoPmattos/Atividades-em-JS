let nota = parseInt(prompt("escreva uma nota"));
while (nota < 0 || nota > 10) {
    console.log("Erro! A nota deve ser entre 0 e 10, digite novamente:");
    nota = parseInt(prompt("escreva novamente uma nota!"));
}
if (nota >= 7) {
    console.log("Aluno aprovado!");
}
else {
    console.log("Aluno reprovado");
}