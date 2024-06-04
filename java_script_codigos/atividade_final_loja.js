let loja = [];
let esc = 0
do {
    esc = parseInt(prompt(`Pressione: 
    [1] para inserir um produto:
    [2] para vender produtos:
    [3] para exibir o valor total do estoque:
    [4] para exibir a lista de produto e suas quantidades:
    [5] para encerrar sessão:`));

    switch (esc) {
        case 1:
            let nome = prompt('Insira o nome do produto:');
            let preço = parseFloat(prompt('Insira o preço do produto:'));
            let quant = parseInt(prompt('Insira a quantidade do produto em estoque:'));
            const produto = {
                nome: nome,
                preço: preço,
                quant: quant
            };
            loja.push(produto);
            break;

        case 2:
            let consu = prompt('Insira o produto que deseja ser vendido:');
            let quanti2 = parseInt(prompt('Qual a quantidade que deseja comprar?'));
            let produtoEncontrado = false;

            for (let cont = 0; cont < loja.length; cont++) {
                if (consu === loja[cont].nome) {
                    produtoEncontrado = true;
                    alert(`Possuimos o produto com nome de ${loja[cont].nome} com quantidade ${loja[cont].quant}`);
                    console.log(`Possuimos o produto com nome de ${loja[cont].nome} com quantidade ${loja[cont].quant}`);
                    if (quanti2 > loja[cont].quant) {
                        alert('Não possuímos a quantidade necessária para sua venda!');
                        console.log('Não possuímos a quantidade necessária para sua venda!');
                    } else {
                        let vendas = prompt('Você deseja vender um produto? Se sim, pressione [1], se não [2]');
                        if (vendas === '1') {
                            loja[cont].quant = loja[cont].quant - quanti2;
                            console.log('Positivo, produto confirmado! Atualizando estoque...');
                            alert('Positivo, produto confirmado! Atualizando estoque...');
                        } else if (vendas === '2') {
                            alert('A venda não foi efetuada!');
                            console.log('A venda não foi efetuada!');
                        }
                    }
                }
            }

            if (!produtoEncontrado) {
                alert('Não temos o produto no estoque!');
                console.log('Não temos o produto no estoque!');
            }
            break;

        case 3:
            let total = 0;
            for (let cont = 0; cont < loja.length; cont++) {
                total = total + loja[cont].preço * loja[cont].quant;
            }
            console.log(`O valor total de todo nosso estoque depois de sua venda é de ${total}`);
            alert(`O valor total de todo nosso estoque depois de sua venda é de ${total}`);
            break;

        case 4:
            for (let cont = 0; cont < loja.length; cont++) {
                console.log(`Nome do produto é ${loja[cont].nome}, seu preço é de ${loja[cont].preço} e sua quantidade é de ${loja[cont].quant} em nosso estoque!`);
                alert(`Nome do produto é ${loja[cont].nome}, seu preço é de ${loja[cont].preço} e sua quantidade é de ${loja[cont].quant} em nosso estoque!`);
            }
            break;

        case 5:
            alert("Você escolheu sair!");
            console.log('Você escolheu sair!')
            break;

        default:
            alert('Opção inválida');
            console.log('Opção inválida');
            break;
    }
} while (esc !== 5);
