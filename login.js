const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});

var botao = document.getElementById("login_button");

entrar = {
    nomeuser: "Murilo",
    email: "muriloifal@gmail.com",
    pwd: 9876
}

botao.addEventListener("click", function(event) {


    var nome = document.getElementById("name").value;
    var emaill = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    if(nome == entrar.nomeuser && emaill == entrar.email && senha == entrar.pwd){
        window.location.href = "./index.html"
    }
    else {
        p = document.getElementById("Err").textContent = "Nome/E-mail ou Senha invalidos"
    }

    event.preventDefault();

});
