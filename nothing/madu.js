class Pessoa {
    Pessoa(idade, nome, casado){
        this.idade; // atributos de uma classe
        this.nome;  // atributo também 
        this.casado // atributo do tipo boolean TRUE // FALSE
    }; // Construtor

    falarnome(){
        console.log("Meu nome é",this.nome); // MÉTODOS (funções dentro de classes, ou funções de objetos).
    }

    falaridade(){
        console.log("Minha idade é",this.idade) // MÉTODOS (funções dentro de classes, ou funções de objetos).
    }

    casado(){
        if(this.casado == true)  {  // utilizando o booleano para se uma pessoa é casada ou nao;
            console.log("é casado")
        }else{
            console.log("não é casado")
        }
    }

    
}

const pessoa1 =  new Pessoa(18, "João Gabriel do Prado Schianti", true);
const pessoa2 =  new Pessoa(18, "Thauane Laissa de Jesus Vital", true);

