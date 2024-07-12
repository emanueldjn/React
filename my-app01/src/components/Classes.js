
// Todo objeto criado com 'class' vai ter um método padrão chamado constructor que vai ser chamado sempre que um novo objeto é criado 
// CRIANDO UM CLASSE
class Person {

    // criando o método
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    // nome do metodo
    greetings() {
        console.log("Olá, meu nome é ", this.name)
    }
}

// CRIANDO OBJETO UTILIZANDO CLASSES
let joao = new Person("João", 20);
let emanuel = new Person("Emanuel", 24);

joão.greetings()
emanuel.greetings()

// Aluno antes de ser aluno ele é uma pessoa.
// O computador entende que o aluno é derivado de uma pessoa.
// Para dizer que uma classe é derivada de outra, vai dizer que ela 'extends' outra classe

class Alumn extends Person {

    constructor(name, age, turma) {
        super(name, age);
        this.turma = turma;
    }

    // Sobreescrevendo
    greetings() {
        console.log("Olá, meu nome é ", this.name, "e eu estou na turma", this.turma);
    }
    
}


// Toda classe que herda de outra classe, ela herda também de seus métodos!
let tea = new Alumn("Tea", 30, "1001");
tea.greetings()