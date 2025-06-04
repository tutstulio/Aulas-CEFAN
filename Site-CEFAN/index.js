if (localStorage.getItem('token') == null) {
    alert("Tu precisa logar rapaz")
    window.location.href = "Login/login.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));
const logado = window.document.querySelector("#logado");

logado.innerHTML = `Olá ${userLogado.nome}`;

function sair () {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = 'Login/login.html';
}