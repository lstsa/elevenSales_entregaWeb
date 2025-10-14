document.addEventListener('DOMContentLoaded', () => {
    mostrarAnuncios();
});



async function mostrarAnuncios() {
    const listaAnuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');

    if (listaAnuncios.length === 0) {
        const container = document.getElementById('anuncios');

        if (!container) return;

        container.innerHTML = '<p>Ainda ninguem anunciou nada</p> <a href="../anuncios/anuncios.html">SEJA O PRIMEIRO A ANUNCIAR</a>';return;
    }

    let html = '<table><tr><td>Nome</td><td>Descrição</td><td>Preço</td><td>condição</td><td>Garagem</td></tr>';
    for(var i = 0; i < listaAnuncios.length; i++) {
        const anuncio = listaAnuncios[i];
        html += '<tr><td>' + anuncio.nome + '</td><td>' + anuncio.descricao + '</td><td>' + anuncio.preco + '</td><td>' + anuncio.condicao + '</td>' + '<td>' + anuncio.garagem + '</td>'
        +'<td><a href="../carrinho/carrinho.html?id=' + i + '"><button>Adicionar ao carrinho</button></a></td></tr>';


    };

    document.getElementById('anuncios').innerHTML = html;
};
