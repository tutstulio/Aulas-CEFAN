function logar()
{
    // Coleta os dados do formulário
    const username = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    
    // Procura pelo usuário
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userFound = users.find(u => u.username === username && u.senha === senha);

    // Armazena usuário e redireciona página, se encontrado
    if (userFound) {
        alert("Suuuuuucesso!");
        sessionStorage.setItem('userFound', JSON.stringify(userFound));
        window.location.href = "../Home/home.html";
    }
    else {
        alert("Usuário ou senha incorretos!");
    }
}