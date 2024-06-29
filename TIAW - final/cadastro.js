// Captura os dados inseridos no cadastro em Variáveis.
var email = document.querySelector('#email')
var labelEmail = document.querySelector('#labelEmail')
var validarEmail = false

var nome = document.querySelector('#nome')
var lamelNome = document.querySelector('#labelNome')
var validarNome = false

var senha = document.querySelector('#senha')
var labelSenha = document.querySelector('#labelSenha')
var validarSenha = false

var Csenha = document.querySelector('#Csenha')
var labelCsenha = document.querySelector('#labelCsenha')
var validarCsenha = false

// Notifica o usuário como os campos deve ser preenchido.
email.addEventListener('keyup', () => {
if(email.value.length <= 0){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = '<p>E-mail *Campo necessário</p>'
validarEmail = false
} else{
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'E-mail'
validarEmail = true
}
});

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 0){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = '<p>Nome *Campo necessário</p>'
    validarNome = false
    } else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
    validarNome = true
    }
    });

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = '<p>*Insira ao menos 6 caracteres</p>'
        validarSenha = false

    } else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        validarSenha = true

    }
    });
Csenha.addEventListener('keyup', () => {
    if(senha.value != Csenha.value){
        labelCsenha.setAttribute('style', 'color: red')
        labelCsenha.innerHTML = '<p>*As senhas não conferem</p>'
        validarCsenha = false

    } else{
        labelCsenha.setAttribute('style', 'color: green')
        labelCsenha.innerHTML = 'As senhas conferem!'
        validarCsenha = true
    }
});

function cadastrar(){
    // Informa o usuário que o cadastro foi completo e salva os dados no Local Storage.
    if(validarEmail && validarNome && validarSenha && validarCsenha){
        const listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]')

        listaUsuario.push(
            {
                Cemail: email.value,
                Cnome: nome.value,
                Csenha: senha.value,
            }
        );

        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))
        alert ('Cadastro completo!');

        setTimeout(()=>{
            window.location.href = 'index.html'
        })

    
    // Irá informar caso o cadastro esteja errado.
    }    else{
        alert('Preencha os campos!');
    }
}