import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}


const novoAdmin = new Admin('Marcos', 'm@mp.com','1983-05-16')
console.log(novoAdmin.criarCurso('JS',20))