class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello(name, age) {
        console.log(`olá, meu nome é ${name} e eu tenho ${age} anos! `);
    }
}
class Student extends Person {
    constructor(name, age, ID) {
        super(name, age)
        this.ID = ID;
    }
    sayHello(name, age, ID) {
        console.log(`olá, meu nome é ${name} e eu tenho ${age} anos e meu ID é ${ID}`);
    }
}

let nome = prompt('insira seu nome');
let idade = parseInt(prompt('insira sua idade'));
let pessoa = new Person(nome, idade);
pessoa.sayHello(nome, idade);



let nome2 = prompt('insira o nome do estudante');
let idade2 = parseInt(prompt('insira a idade da pessoa'));
let ID = parseInt(prompt('insira o ID do estudante!'))
let estudante = new Student(nome2, idade2, ID);
estudante.sayHello(nome2, idade2, ID);










