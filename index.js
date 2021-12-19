//O projeto é de um banco ByteBank que precisa de um sistema para cadastrar clientes e ter contas correntes para cada um de seus clientes
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1= new Cliente("Ricardo", 11122233309); // define que o novo cliente criado a partir da classe molde "Cliente" poderá ter seus atributos acessados pela variável cliente1

const cliente2 = new Cliente("Alice", 88822233309); // tanto cliente1 quanto cliente2 a partir daqui são objetos, ou instancias da classe/molde Cliente
console.log(cliente2.cpf);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001); //new contacorrente devolve uma referencia ao lugar da memoria onde é possivel encontrar e manipular as informações do objeto criado
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);
//conta2.cliente = new Cliente(); //chama o construtor da classe, se não estiver sido criado o objeto cliente para conta2, ao tentar imprimi-lo o código retorna "undefined"
//se o valor de um atributo de objeto for "null" o computador deixa o espaço de memoria da variável como vazio

let valor = 200; //tipo primitivos quando passados por parametro dentro de um método, o que acontece é que o valor da variavel é copiado para dentro do metodo, e dentro do método como se está trabalhando com uma copia da variavel qualquer alteração realizada dentro do método não é refletida na variavel de escopo global

//conta2.saldo = 30000; //gera erro porque a propriedade saldo só tem o getter "que permite acesso para leitura", não possuindo setter "que permite atribuição/modificação"
contaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);
