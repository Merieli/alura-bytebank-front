import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100)
    }

    //método abstrato sempre precisa ser sobrescrito dentro dos tipos de conta
    sacar(valor){
        const taxa = 1.01;
        return this._sacar(valor, taxa);//executa o método privado e retorna o valor dele
    }
}