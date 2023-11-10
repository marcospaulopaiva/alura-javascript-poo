import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} passou no curso ${curso}`
    }
}

const novoDocente = new Docente('Marcos', 'm@mp.com','1983-05-16')
console.log(novoDocente)
console.log(novoDocente.exibirInfor())
console.log(novoDocente.aprovaEstudante('Paulo', 'JS'))