// Irá receber os dados do Local Storage e criar um token para o usuário

function login() {
    let usuario = document.querySelector('#nome')
    let usuarioLabel = document.querySelector('#nomeLabel')

    let senha = document.querySelector('#senha')
    let usuarioSenha = document.querySelector('#senhaLabel')

    let listaUsuario = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    // Recebe os dados do Local Storage
    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))
    
    listaUsuario.forEach((item) => {
        if(nome.value == item.nome && senha.value == item.senha){
            userValid = {
                nome: item.Cnome,
                email: item.Cemail,
                senha: item.Csenha
            }
        }
    })

    // Se os dados conferem, irá gerar o token
    if (nome.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = 'principal.html'

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

    } else {
        usuarioLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        usuarioSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos!'

        usuario.focus()
    }
}