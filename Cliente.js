export class Cliente {
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){ // função especial que permite criar o cpf somente uma unica vez
        this.nome = nome;
        this._cpf = cpf;// dessa forma é passada a referencia necessário para o cpf, mas sem passar atributos ou acessores para modificação
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
}