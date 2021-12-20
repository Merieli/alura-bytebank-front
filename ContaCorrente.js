import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ //dessa forma tudo que estiver na classe conta sera extendido e valido tambem na classe ContaCorrente como se o codigo estivesse escrito ali
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1; //atribui o valor do numeroDeContas "que é um atributo estatico" baseado na conta corrente como um todo ao invés de em um instancia unica dela
    }

    sacar(valor){//metodo sacar tera um comportamento diferente da classe conta, por isso é redeclarado com modificações dentro da classe, sobrescrevendo o comportamento da de sacar da classe conta
        let taxa = 1.1;        
        return this._sacar(valor, taxa); //this._sacar() nesse caso é a mesma coisa que super._sacar() porque nesse caso será retornado o valor do método sem sobrescrever
    }
}

