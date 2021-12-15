//O projeto é de um banco ByteBank que precisa de um sistema para cadastrar clientes e ter contas correntes para cada um de seus clientes
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1= new Cliente(); // define que o novo cliente criado a partir da classe molde "Cliente" poderá ter seus atributos acessados pela variável cliente1
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente(); // tanto cliente1 quanto cliente2 a partir daqui são objetos, ou instancias da classe/molde Cliente
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200; //tipo primitivos quando passados por parametro dentro de um método, o que acontece é que o valor da variavel é copiado para dentro do metodo, e dentro do método como se está trabalhando com uma copia da variavel qualquer alteração realizada dentro do método não é refletida na variavel de escopo global
contaCorrenteRicardo.transferir(valor, conta2);

console.log("valor: ", valor)
console.log(conta2);
