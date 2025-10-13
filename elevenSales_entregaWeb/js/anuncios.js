document.addEventListener('DOMContentLoaded', () => {
    mostrarAnuncios();
});



async function mostrarAnuncios() {
    const listaAnuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');

    if (listaAnuncios.length === 0) {
        const container = document.getElementById('anuncios');

        if (!container) return;

        container.innerHTML = '<p>Nenhum anúncio criado</p>';return;
    }

    let html = '<table><tr><td>Nome</td><td>Descrição</td><td>Preço</td><td>condição</td><td>Garagem</td></tr>';
    for(var i = 0; i < listaAnuncios.length; i++) {
        const anuncio = listaAnuncios[i];
        html += '<tr><td>' + anuncio.nome + '</td><td>' + anuncio.descricao + '</td><td>' + anuncio.preco + '</td><td>' + anuncio.condicao + '</td>' + '<td>' + anuncio.garagem + '</td>' +
        '<td><a href="javascript:excluirAnuncio(' + i + ')">Excluir</a></td>' +
        '<td><a href="../anuncios/editarAnuncio.html?id=' + i + '">Editar</a></td>' +
        '<td><a href="../carrinho/carrinho.html?id=' + i + '"><button>Adicionar ao carrinho</button></a></td></tr>';


    };

    document.getElementById('anuncios').innerHTML = html;
};


async function excluirAnuncio(i) {
    const listaAnuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');
    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]');
    const anuncio = listaAnuncios[i];
    
    for (let j = 0; j < listaGaragens.length; j++) {
        const garagem = listaGaragens[j];
        garagem.anunciosGaragem = garagem.anunciosGaragem.filter(a => a.nome !== anuncio.nome);
        listaGaragens[j] = garagem;
    }

    localStorage.setItem('garagens', JSON.stringify(listaGaragens));

    listaAnuncios.splice(i, 1);
    localStorage.setItem('anuncios', JSON.stringify(listaAnuncios));

    window.location.reload();
}