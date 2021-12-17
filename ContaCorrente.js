import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;

    _cliente;
   
    set cliente(novoValor){ //proteção para que quanto alguem for atribuir um valor, atribuí-lo corretamente
        if(novoValor instanceof Cliente){ //verifica se novoValor é uma nova instancia da classe Cliente "se não for, ele não irá atribuir o valor ao objeto"
            this._cliente = novoValor;
        
        }
    }
    //Para acessar um método set definido não é preciso usar "()" como em uma função, porque ele é uma propriedade especial e pode ser chamado com igualdade

    get cliente(){ //acessor que permite mostrar o valor de um atributo privado
        return this._cliente;
    } 

    _saldo = 0; //pra proteger o atributo para que ninguem mais fora da classe possa alterar o atributo deve ser escrito com um "#" na frente da variavel, mas esse método ainda não está aprovado, então no lugar dele se utiliza o "_"

    get saldo(){ //o acessor sempre é público por isso não tem _ ou # na frente do seu nome
        return this._saldo
    }

    sacar(valor){
        if(this._saldo >= valor){ //pega o saldo "desta" conta corrente, a que no momento estiver sendo manipulada
            this._saldo -= valor;
            return valor; //se dentro de um método não houver um return definido ele sempre será mostrado com "undefined" quando buscado ser valor
        } else{
            console.log("Saldo insuficiente!")
        }
    } //método que é uma função para realizar determinada ação representando uma operação

    depositar(valor){
        if(valor <= 0){
            return;//early return
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

