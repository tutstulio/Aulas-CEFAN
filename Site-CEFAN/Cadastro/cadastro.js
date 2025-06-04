function cadastrar()
{
    // Coleta os dados do formulário
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('pass').value;
    const senhaConfirmada = document.getElementById('passConfirm').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    // Validação simples
    if (!username || !email || !senha || !senhaConfirmada || !peso || !altura) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação de senha
    if (senha !== senhaConfirmada) {
        alert("As senhas não coincidem.");
        return;
    }

    // Cria um objeto com os dados do usuário
    const user = {
        username,
        email,
        senha,
        peso,
        altura
    };

    // Recupera lista de usuários ou cria uma nova
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se o usuário já existe
    if (users.some(u => u.username === username)) {
        alert("Usuário já existente!");
        return;
    }

    // Armazena o novo usuário localmente (disponível durante o uso do navegador)
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Usuário cadastrado com sucesso!");

    // Redireciona para a Home
    window.location.href = "../Home/home.html";
}