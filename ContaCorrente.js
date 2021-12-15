export class ContaCorrente {
    agencia;
    cliente;

    _saldo = 0; //pra proteger o atributo para que ninguem mais fora da classe possa alterar o atributo deve ser escrito com um "#" na frente da variavel, mas esse método ainda não está aprovado, então no lugar dele se utiliza o "_"

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
        conta.cidade = "São Paulo";
        conta.depositar(valorSacado);
        const valorSacado = this.sacar(valor);
    }
}

