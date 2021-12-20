//O projeto é de um banco ByteBank que precisa de um sistema para cadastrar clientes e ter contas correntes para cada um de seus clientes
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1= new Cliente("Ricardo", 11122233309); // define que o novo cliente criado a partir da classe molde "Cliente" poderá ter seus atributos acessados pela variável cliente1

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001); //new contacorrente devolve uma referencia ao lugar da memoria onde é possivel encontrar e manipular as informações do objeto criado
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);