document.addEventListener('DOMContentLoaded', () => {
    mostrarLeiloes();
});

async function mostrarLeiloes() {
    const listaLeiloes = JSON.parse(localStorage.getItem('leilao') || '[]');

    const container = document.getElementById('leiloes');
    if (!container) return;

    if (listaLeiloes.length === 0) {
        container.innerHTML = '<p>Nenhum leilão criado</p>';
        return;
    }

    let html = `
        <table border="1">
            <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço Imediato</th>
                <th>Lance Inicial</th>
                <th>Lance Atual</th>
                <th>Condição</th>
                <th>Data Fim</th>
                <th>Garagem</th>
                <th>Vendedor</th>
                <th>Ações</th>
            </tr>
    `;

    for (let i = 0; i < listaLeiloes.length; i++) {
        const leilao = listaLeiloes[i];
        html += `
            <tr>
                <td>${leilao.nome}</td>
                <td>${leilao.descricao}</td>
                <td>R$ ${leilao.preco}</td>
                <td>R$ ${leilao.lanceInicial}</td>
                <td>R$ ${leilao.lanceAtual}</td>
                <td>${leilao.condicao}</td>
                <td>${leilao.dataFim}</td>
                <td>${leilao.garagem}</td>
                <td>${leilao.nomeVendedor}</td>
                <td>
                    <a href="../anuncios/editarAnuncio.html?id='+ i +'">Editar</a>
                    <button onclick="excluirLeilao('${leilao.id}')">Excluir</button>
                    <br>
                    <input type="number" id="lance_${leilao.id}" placeholder="Seu lance" min="${Number(leilao.lanceAtual) + 1}">
                    <button onclick="darLance('${leilao.id}')">Dar lance</button>
                    <br>
                    <button onclick="comprarImediato('${leilao.id}')">Comprar Imediato</button>
                </td>
            </tr>
        `;
    }

    html += '</table>';
    container.innerHTML = html;
}

// Função de editar (ainda não faz nada)
function editarLeilao(id) {
    alert('Função de edição ainda não implementada.');
}

// Excluir já existe
async function excluirLeilao(id) {
    const listaLeiloes = JSON.parse(localStorage.getItem('leilao') || '[]');
    const novalista = listaLeiloes.filter(leilao => leilao.id !== id);
    localStorage.setItem('leilao', JSON.stringify(novalista));
    window.location.reload();
}

// Função para dar lance
function darLance(id) {
    const listaLeiloes = JSON.parse(localStorage.getItem('leilao') || '[]');
    const leilao = listaLeiloes.find(l => l.id === id);
    const input = document.getElementById('lance_' + id);
    const valorLance = Number(input.value);

    if (!valorLance || valorLance <= Number(leilao.lanceAtual)) {
        alert('O lance deve ser maior que o lance atual!');
        return;
    }

    leilao.lanceAtual = valorLance;
    localStorage.setItem('leilao', JSON.stringify(listaLeiloes));
    mostrarLeiloes();
}

// Função para comprar imediatamente
function comprarImediato(id) {
    const listaLeiloes = JSON.parse(localStorage.getItem('leilao') || '[]');
    const leilao = listaLeiloes.find(l => l.id === id);

    if (!confirm(`Tem certeza que deseja comprar "${leilao.nome}" por R$ ${leilao.preco}?`)) {
        return;
    }

    // Aqui você pode adicionar lógica para marcar como vendido, remover, etc.
    // Por enquanto, apenas remove o leilão
    const novalista = listaLeiloes.filter(l => l.id !== id);
    localStorage.setItem('leilao', JSON.stringify(novalista));
    alert('Compra realizada com sucesso!');
    mostrarLeiloes();
}