// INICIAR VETOR PARA ARMAZENAR INFO SOBRE PRODUTOS
// CADA ELEMENTO DEVE CONTER NOME DO PRODUTO, PREÇO UNITARIO E QUANTIDADE NO ESTOQUE.
// PERMITIR AO USUARIO ADICIONAR NOVOS PRODUTOS NO ESTOQUE
//SOLICITAR AO USUARIO QUE SOLICITE O NOME DO PRODUTO, PREÇO UNITARIO E SE HA NO ESTOQUE
// PERMITIR AO USUARIO VENDER PRODUTOS E ATUALIZAR O ESTOQUE
// SOLICITE AO USUARIO QUE INSIRA O NOME DO PRODUTO A SER VENDIDO E A QUANTIDADE
// ATUALIZE A QUANTIDADE EM ESTOQUE DO PRODUTO APROPRIADO NO VETOR
// 
let quanti2 = 0;
let loja = [];
while (opcao = 2) {
    let escolha = parseInt(prompt(`Pressione: 
    [1] para inserir um produto:
    [2] para vender produtos:
    [3] para exibir o valor total do estoque:
    [4] para exibir a lista de produto e suas quantidades :
    [5] para encerrar sessão:`));



    if (escolha == 1) {

        for (let cont = 0; cont < 1; cont++) {
            let nome = prompt('Insira o nome do produto!');
            let preço = parseFloat(prompt('Insira o preço do produto!'));
            let quant = parseInt(prompt('Insira a quantidade do produto em estoque!'));
            const produto = {
                nome: nome,
                preço: preço,
                quant: quant
            };
            loja.push(produto);
        };

        let resp = parseInt(prompt('Deseja inserir novos produtos em estoque? se sim, pressione [1] e [2] para não!'));
        if (resp == 1) {
            let nome = prompt('insira o nome do produto!');
            let preço = parseFloat(prompt('insira o preço unitario do produto!'));
            let quant = parseInt(prompt('insira a quantidade do produto em estoque!'));
            const produto = {
                nome: nome,
                preço: preço,
                quant: quant
            };
            loja.push(produto);
        } else if (resp == 2) {
            alert('Não será adicionado nenhum outro produto!');
            console.log('Não será adicionado nenhum outro produto!');

        } else {
            alert('Erro! Numero não identificado! Vamos prosseguir mesmo assim!');
            console.log('Erro! Numero não identificado! Vamos prosseguir mesmo assim!');
        }
    }




    if (escolha == 2) {
        let consu = prompt('Insira o produto que deseja ser vendido!');
        quanti2 = parseInt(prompt('Qual a quantidade que deseja comprar?'));

        for (let cont = 0; cont < loja.length; cont++) {

            if (consu == loja[cont].nome) {
                alert(`Possuimos o produto com nome de ${loja[cont].nome} com  quantidade ${loja[cont].quant}`);
                console.log(`Possuimos o produto com nome de ${loja[cont].nome} com  quantidade ${loja[cont].quant}`);
                if (quanti2 <= loja[cont].quant) {
                    alert('Temos a quantidade certa para sua venda!');
                    console.log('Temos a quantidade certa para sua venda!');
                    let vendas = prompt('Você deseja vender um produto? se sim pressione [1], se não [2]')
                    if (vendas == 1) {
                        loja[cont].quant = loja[cont].quant - quanti2
                        alert('Positivo, produto confirmado! atualizando estoque...');
                        console.log('Positivo, produto confirmado! atualizando estoque...');
                    }
                    if (vendas == 2) {
                        alert('A venda não foi efetuada!');
                        console.log('A venda não foi efetuada!');
                    }
                }
                if (quanti2 > loja[cont].quant) {
                    alert('Não possuimos a quantidade necessaria para sua venda!');
                    console.log('Não possuimos a quantidade necessaria para sua venda!');
                }
            }
            if (consu != loja[cont].nome) {
                alert("Não temos o produto no estoque!!");
                console.log("Não temos o produto no estoque!!");
            }
        }


    }



    if (escolha == 3) {
        let total = 0;
        for (let cont = 0; cont < loja.length; cont++) {
            total = total + loja[cont].preço * loja[cont].quant;
        }
        console.log(`O valor total de todo nosso estoque depois de sua venda é de ${total}`);

    }




    if (escolha == 4) {

        for (let cont = 0; cont < loja.length; cont++) {
            console.log(`Nome do produto é ${loja[cont].nome} seu preço é de ${loja[cont].preço} e sua quantidade é de ${loja[cont].quant} em nosso estoque!`);
        }
    }




    if (escolha == 5) {
        let opcao = prompt(' Aperte [1] para continuar e repetir o processo e [2] para sair!')
        if (opcao == 2) {
            alert('Você escolheu sair!')
            console.log('Você escolheu sair!')
            break;
        }
        
    }
}