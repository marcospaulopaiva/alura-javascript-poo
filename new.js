function User(nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfor = function(){
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User('Marcos P','mp@mp.com')
// console.log(novoUser.exibirInfor())

// function Admin(role){
//     User.call(this, 'Marcos P','mp@mp.com')
//     this.role = role || 'estudante'
// }


// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfor())
// console.log(novoUser.role)

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfor: function(nome){
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Marcos P','mp@mp.com')
console.log(novoUser.exibirInfor())

 // console.log(novoUser.exibirInfor('Marcos Paulo'))
// console.log(user.isPrototypeOf(novoUser))


