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

    let html = '<table><tr><td>Nome</td><td>Descrição</td><td>Preço</td><td>condição</td><td>Garagem</td><td>Denunciado</td></tr>';
    for(var i = 0; i < listaAnuncios.length; i++) {
        const anuncio = listaAnuncios[i];
        html += '<tr><td>' + anuncio.nome + '</td><td>' + anuncio.descricao + '</td><td>' + anuncio.preco + '</td><td>' + anuncio.condicao + '</td>' + '<td>' + anuncio.garagem + '</td><td>' + anuncio.denunciado + '</td>'
        +'<td><a href="../carrinho/carrinho.html?id=' + i + '"><button>Adicionar ao carrinho</button></a></td>'
        +'<td><button onclick="denunciarAnuncios('+  i +')">Denunciar</button></td></tr>';
        

    };

    document.getElementById('anuncios').innerHTML = html;
};

async function denunciarAnuncios(indice){
    const listaAnuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');
    listaAnuncios[indice].denunciado = true;
    localStorage.setItem('anuncios', JSON.stringify(listaAnuncios));
    alert('Anúncio denunciado com sucesso!');
}


