export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome(){
        return this.#nome
    }
    get email(){
        return this.#email
    }
    get nascimento(){
        return this.#nascimento
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }
    set nome(nome){
        this.#nome = nome
    }
    set email(email){
        this.#email = email
    }
    set nascimento(nascimento){
        this.#nascimento = nascimento
    }
    set role(role){
        this.#role = role
    }
    set ativo(ativo){
        this.#ativo = ativo
    }


    exibirInfor(){
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}