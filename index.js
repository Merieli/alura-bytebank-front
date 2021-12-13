//O projeto é de um banco ByteBank que precisa de um sistema para cadastrar clientes e ter contas correntes para cada um de seus clientes

class Cliente { //nome de uma classe começa com letra maiuscula, e o que estiver dentro de chaves define o que a classe possui, sendo as variáveis seus campos/atributos
    nome;
    cpf;
};

class ContaCorrente {
    agencia;
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
}

const cliente1= new Cliente(); // define que o novo cliente criado a partir da classe molde "Cliente" poderá ter seus atributos acessados pela variável cliente1
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente(); // tanto cliente1 quanto cliente2 a partir daqui são objetos, ou instancias da classe/molde Cliente
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado)

console.log(contaCorrenteRicardo);