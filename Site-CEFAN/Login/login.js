function logar() {
    // Coleta os dados do formulário
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    
    // Procura pelo usuário
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const thisUser = users.find(u => u.username === login && u.senha === senha);

    // Armazena usuário e redireciona página, se encontrado
    if (thisUser) {
        alert("Suuuuuucesso!");
        localStorage.setItem('thisUser', JSON.stringify(thisUser));
        window.location.href = "../Home/home.html";
    }
    else {
        alert("Usuário ou senha incorretos!");
    }
}