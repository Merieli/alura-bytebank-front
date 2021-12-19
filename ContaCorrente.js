import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
   
    set cliente(novoValor){ //proteção para que quanto alguem for atribuir um valor fora da classe, atribuí-lo corretamente
        if(novoValor instanceof Cliente){ //verifica se novoValor é uma nova instancia da classe Cliente "se não for, ele não irá atribuir o valor ao objeto"
            this._cliente = novoValor;
        
        }
    }

    get cliente(){
        return this._cliente;
    }    

    get saldo(){
        return this._saldo
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente; //nesta linha foi utilizado o acessor cliente para que as validações deles sejam aplicáveis aqui
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1; //atribui o valor do numeroDeContas "que é um atributo estatico" baseado na conta corrente como um todo ao invés de em um instancia unica dela
    }

    sacar(valor){
        if(this._saldo >= valor){ //pega o saldo "desta" conta corrente, a que no momento estiver sendo manipulada
            this._saldo -= valor;
            return valor; //se dentro de um método não houver um return definido ele sempre será mostrado com "undefined" quando buscado seu valor
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

