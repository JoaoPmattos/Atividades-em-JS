//CRIAÇÃO DE CLASSE
class Carro {
    //NO METODO CONSTRUTOR SE DECLARA OS ATRIBUTOS DA CLASSE, ELE PERTENCE A CRIAÇÃO DA CLASSE, SENDO OBRIGATÓRIO O USO, A SEQUENCIA DEFINIDA NA CONSTRUÇÃO SERÁ USADA COMO REFERENCIA NO PREENCHIMENTO

    //ABSTRAÇÃO
    constructor(modelo, cor) {
        //THIS FAZ REFERENCIA AO QUE ESTA DENTRO, AO QUE PERTENCE, PODE SER USADO DENTRO DE FUNÇÕES, METODOS E CLASSES
        this.modelo = modelo;
        this.cor = cor;
        this._totalKm = 0;
        this._velocidade;
    }
    //FORA DO CONSTRUCTOR, VEM ABAIXO TODOS OS METODOS QUE IREMOS UTILIZAR DENTRO DA CLASSE
    _velocidadeTotal(valor) {
        this._velocidade = valor;
        alert('VELOCIDADE MAXIMA DEFINIDA')
    }
    acelerar(valor) {
        if (valor > this._velocidade) {
            alert('IMPOSSIVEL ACELERAR')
        } else {
            console.log('AUMENTANDO A VELOCIDADE')
        }
    }
    frear() {
        alert('DIMINUINDO A VELOCIDADE')
    }
    //ENCAPSULAMENTO
    // SETTER SERVER PARA ATRIBUIR UM VALOR PARA UM ATRIBUTO DE UM OBJETO, DIFERENTE DOS METODOS SIMPLES ELE PODE SER TRATADO COMO UMA VARIAVEL
    set LerKm(valor) {
        this._totalKm = valor;
    }
    //GETTER É UM METODO PARA OBTER UM VALOR DE UM ATRIBUTO DA CLASSE
    get pegarKm() {
        return this._totalKm
    }
}
//HERANÇA
class CarroEletrico extends Carro {
    constructor(modelo, cor, bateria) {
        super(modelo, cor), this._totalKm, this._velocidade;
        this.bateria = bateria;
    }
}









//CRIAÇÃO DE UM NOVO OBJETO A PARTIR DA CLASSE

let modeloCarro = prompt('DIGITE O MODELO DO CARRO');
let corCarro = prompt('DIGITE A COR DO CARRO');
let carro5 = new Carro(modeloCarro, corCarro)

console.log(carro5);

let carro1 = new Carro('FORD KÁ, VERMELHO');

console.log(carro1);

let vel = parseInt(prompt('QUAL A VELOCIDADE MAXIMA PRO CARRO 1'));
carro1._velocidadeTotal(vel);
carro1.LerKm = parseInt(prompt('QUAL O KM ATUAL')); //setter

console.log(carro1.pegarKm);
console.log(carro5.pegarKm);
//carro1.acelerar(200)
//carro1.acelerar();
//carro1.frear();

//CRIAÇÃO DE UM NOVO OBJETO A PARTIR DA CLASSE EXTEND

let carro2 = new CarroEletrico('tesla', 'branco perola', 5000);
let velele = parseInt(prompt('QUAL A VELOCIDADE MAXIMA PRO CARRO 2'));
carro2._velocidadeTotal(velele);