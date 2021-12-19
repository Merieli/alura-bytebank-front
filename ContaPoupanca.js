export class ContaPoupanca{
    constructor(saldoInicial, cliente, agencia){ //propriedade de instancias devem ser definidas dentro de métodos/construtores da classe
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor){
        if(this._saldo >= valor){ 
            this._saldo -= valor;
            return valor;
        } else{
            console.log("Saldo insuficiente!")
        }
    } 
    
    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}