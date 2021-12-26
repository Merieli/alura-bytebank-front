/* 
Ser autenticavel significa ter o método autenticar

ducky type - tipo do pato que é a maneira de se trabalhar em linguagens fracamente tipadas. Dessa forma não interessa o tipo do objeto, mas sim o que ele consegue fazer, ou seja, se possui determinados métodos ou propriedades necessários.
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){ //metodo estatico
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha); //se a senha usada para o login do metodo autenticar existir na classe autenticavel "for a mesma cadastrada no objeto"
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function; //precisa existir uma funcao autenticar dentro da clase
    }
}