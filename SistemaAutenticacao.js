/* 
Ser autenticavel significa ter o método autenticar
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){ //metodo estatico
        return autenticavel.autenticar(senha); //se a senha usada para o login do metodo autenticar existir na classe autenticavel "for a mesma cadastrada no objeto"
    }
}