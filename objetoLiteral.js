// const user = {
//     nome: "Juliana",
//     email: "j@j.com",
//     nascimento: "2021/01/01",
//     role: "estudante",
//     ativo: true,
//     exibirInfor: function(){
//         console.log(this.nome, this.email)
//     }
// }



let user = {
    perfil: 'estudante'
}

let estudante = {
    nome: 'juliana'
}

Object.setPrototypeOf(estudante, user)