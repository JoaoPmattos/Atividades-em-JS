
let biblioteca = [];
for (let cont = 0; cont < 2; cont++) {
    let titulo = prompt('digite o titulo do livro!');
    let autor = prompt('digite o autor do livro!');
    let anoPublicacao = parseInt(prompt('digite o ano de publicação'));
    let genero = prompt('digite o genero do livro!');
    let paginas = parseInt(prompt('digite o total de paginas do livro!'));

    const livro = {
        titulo: titulo,
        autor: autor,
        anoPublicacao: anoPublicacao,
        genero: genero,
        paginas: paginas
    };
    biblioteca.push(livro);
};
for (let cont = 0; cont < biblioteca.length; cont++) {
    alert(`o livro digitado foi ${biblioteca[cont].titulo}, com autor de nome ${biblioteca[cont].autor}, ano de publicação ${biblioteca[cont].anoPublicacao}, com genero de ${biblioteca[cont].genero} e ${biblioteca[cont].paginas} de paginas!`)
};
biblioteca[1].paginas=parseInt(prompt('atualize a pagina do livro!'));
console.log(`o ano é ${biblioteca[1].paginas}`);

// alert(' selecione [1] para solicitar uma atualização e [2] para encerrar!');
// let atu = prompt('[1] ou [2]?')
// if (atu == 1); {
//     biblioteca.paginas = parseInt(prompt('atualize o numero de paginas'));
//     console.log(`o numero de paginas atualizado para ${biblioteca[cont].paginas}, com sucesso!`);
// } if (atu == 2) {
//     alert('programa encerrado!');
//     console.log('programa encerrado!')
// } else
//     alert('erro!');





