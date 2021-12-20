//Conta base
export class Conta{
    constructor(saldoInicial, cliente, agencia){ //propriedade de instancias devem ser definidas dentro de métodos/construtores da classe
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia; //é uma boa prática sempre inicializar esses atributos com algum valor, e no caso esta sendo utilizado o valor passado por parametro paraa classe
    }
   
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

    sacar(valor){
        let taxa = 1;
        return this._sacar(valor, taxa); //executa o método privado e retorna o valor dele
    } //método que é uma função para realizar determinada ação representando uma operação

    _sacar(valor, taxa){ //método privado
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){ //pega o saldo "desta" conta corrente, a que no momento estiver sendo manipulada
            this._saldo -= valorSacado;
            return valorSacado; //se dentro de um método não houver um return definido ele sempre será mostrado com "undefined" quando buscado seu valor
        } 

        return 0;
    }

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