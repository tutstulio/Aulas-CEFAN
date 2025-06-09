const thisUser = JSON.parse(localStorage.getItem('thisUser'));

const nome = document.querySelector('.profile-info h2');
const idade = document.getElementById('idade');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const xp = document.getElementById('xp');
const mao = document.getElementById('mao');

nome.textContent = thisUser.username;
idade.textContent = `Idade: ${thisUser.idade} anos`;
altura.textContent = `Altura: ${thisUser.altura} m`;
peso.textContent = `Peso: ${thisUser.peso} kg`;
xp.textContent = `Experiência: ${thisUser.xp}`;

if (thisUser.mao === "destro")
    mao.textContent = "Mão dominante: direita";
else
    mao.textContent = "Mão dominante: esquerda";

function adicionar ()
{
    const data_aaaa_mm_dd = document.getElementById('data').value;
    const pontos = document.getElementById('pontos').value;
    const strikes = document.getElementById('strikes').value;
    const spares = document.getElementById('spares').value;
    const splits = document.getElementById('splits').value;
    const opens = document.getElementById('opens').value;
    const obs = document.getElementById('obs').value;

    const recordsTable = document.querySelector('.records tbody');
    const metricsTableRow = document.querySelector('.metrics tbody tr');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${data_aaaa_mm_dd}</td>
        <td>${pontos}</td>
        <td>${strikes}</td>
        <td>${spares}</td>
        <td>${splits}</td>
        <td>${opens}</td>
        <td>${obs}</td>
    `;

    recordsTable.appendChild(novaLinha);

    const total = recordsTable.childElementCount - 1;

    metricsTableRow.children[0].textContent = "A dias/mês";
    metricsTableRow.children[1].textContent = 45;
    metricsTableRow.children[2].textContent = 45.2;
    metricsTableRow.children[3].textContent = 5.7;
    metricsTableRow.children[4].textContent = total + " dias";
}