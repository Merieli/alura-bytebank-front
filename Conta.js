//Conta base
export class Conta{
    constructor(saldoInicial, cliente, agencia){ //propriedade de instancias devem ser definidas dentro de métodos/construtores da classe
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor){
        taxa = 1.1 + valor;
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