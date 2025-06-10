const thisUser = JSON.parse(localStorage.getItem('thisUser'));

const nome = document.querySelector('.profile-info h2');
const idade = document.getElementById('idade');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const xp = document.getElementById('xp');
const mao = document.getElementById('mao');

let data_aaaa_mm_dd = [];
let pontos = [];
let strikes = [];
let spares = [];
let splits = [];
let opens = [];
let obs = [];

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
    data_aaaa_mm_dd.push(document.getElementById('data').value);
    pontos.push(document.getElementById('pontos').value);
    strikes.push(document.getElementById('strikes').value);
    spares.push(document.getElementById('spares').value);
    splits.push(document.getElementById('splits').value);
    opens.push(document.getElementById('opens').value);
    obs.push(document.getElementById('obs').value);

    const len = obs.length;
    const recordsTable = document.querySelector('.records tbody');
    const metricsTableRow = document.querySelector('.metrics tbody tr');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${data_aaaa_mm_dd[len-1]}</td>
        <td>${pontos[len-1]}</td>
        <td>${strikes[len-1]}</td>
        <td>${spares[len-1]}</td>
        <td>${splits[len-1]}</td>
        <td>${opens[len-1]}</td>
        <td>${obs[len-1]}</td>
    `;

    recordsTable.appendChild(novaLinha);

    const total = recordsTable.childElementCount - 1;

    metricsTableRow.children[0].textContent = data_aaaa_mm_dd[melhor(pontos)];
    metricsTableRow.children[1].textContent = media(pontos);
    metricsTableRow.children[2].textContent = 0;
    metricsTableRow.children[3].textContent = 0;
    metricsTableRow.children[4].textContent = total + " dias";
}

function melhor(valores) {
    const N = valores.length;
    let maior = 0;
    let melhor;
    for (let i = 0; i < N; i++) {
        const v = Number(valores[i]);
        if (v > maior) {
            maior = v;
            melhor = i;
        }
    }
    return melhor;
}

function media(valores) {
    const N = valores.length;
    let media = 0;
    for (let i = 0; i < N; i++) {
        media += Number(valores[i]);
    }
    media /= N;
    return media;
}