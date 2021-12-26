//Conta base
//Classe abstrata - que é pensada para não ser instanciada diretamente, por isso não pode ser instanciada e só funciona para ser herdada
export class Conta{
    constructor(saldoInicial, cliente, agencia){ //propriedade de instancias devem ser definidas dentro de métodos/construtores da classe
        //Para proteger a classe Conta, fazendo com que nenhum usuário consiga instanciar uma nova conta a partir dela tendo que usar ou ContaCorrente ou ContaPoupanca para isso:
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma Classe Abstrata"); //lançando um novo erro no código
        }
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
        //método vazio porque o comportamento dele será diferente em cada tipo de conta
        throw new Error("O método Sacar da Conta é abstrato");
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