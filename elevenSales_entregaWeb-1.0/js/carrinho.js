document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const idAnuncio = params.get('id'); // pega o id do anúncio da URL

    if (idAnuncio) {
        adicionarAoCarrinho(idAnuncio);
    }

    mostrarCarrinho();
});

// --- Adiciona item ao carrinho ---
function adicionarAoCarrinho(idAnuncio) {
    const listaAnuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');
    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');

    const anuncio = listaAnuncios.find(a => a.id === idAnuncio);
    if (!anuncio) return;

    const index = carrinho.findIndex(item => item.id === idAnuncio);
    if (index !== -1) {
        carrinho[index].quantidade += 1;
    } else {
        carrinho.push({...anuncio, quantidade: 1});
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// --- Exibe todos os itens do carrinho ---
function mostrarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const container = document.getElementById('itensCarrinho');
    const totalContainer = document.getElementById('totalCarrinho');

    if (carrinho.length === 0) {
        container.innerHTML = '<p>O carrinho está vazio</p>';
        totalContainer.innerHTML = '';
        return;
    }

    let html = '<table border="1" cellpadding="5"><tr><th>Nome</th><th>Preço</th><th>Quantidade</th><th>Subtotal</th><th>Remover</th></tr>';
    let total = 0;

    carrinho.forEach((item, index) => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;

        html += `<tr>
            <td>${item.nome}</td>
            <td>R$ ${item.preco}</td>
            <td>
                <input type="number" value="${item.quantidade}" min="1" onchange="editarQuantidade(${index}, this.value)">
            </td>
            <td>R$ ${subtotal.toFixed(2)}</td>
            <td><button onclick="removerItem(${index})">Remover</button></td>
        </tr>`;
    });

    html += '</table>';
    container.innerHTML = html;
    totalContainer.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
}

// --- Edita quantidade de um item ---
function editarQuantidade(index, novaQtd) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    carrinho[index].quantidade = parseInt(novaQtd);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    mostrarCarrinho();
}

// --- Remove item do carrinho ---
function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    mostrarCarrinho();
}
