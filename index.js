//O projeto é de um banco ByteBank que precisa de um sistema para cadastrar clientes e ter contas correntes para cada um de seus clientes
import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);