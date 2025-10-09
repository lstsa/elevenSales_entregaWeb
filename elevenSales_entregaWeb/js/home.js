document.addEventListener('DOMContentLoaded', () => {
    mostrarGaragens();

    mostrarAnuncios();
});

async function mostrarGaragens() {
    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]')

    if (listaGaragens.length === 0) {

        const container = document.getElementById('garagens');

        if (!container) return;

        container.innerHTML = '<li>Nenhuma garagem criada</li>';return;
    }

    let html = '<table><tr><td>Garagens</td><td>Excluir</td><td>Editar</td></tr>';
    for(var i=0; i < listaGaragens.length;i++) {
        const garagem = listaGaragens[i];
        html += '<tr><td><li>' + garagem.nome + '</li></td><td><a href="javascript:excluirGaragem(\'' + garagem.id + '\')">Excluir</a></td><td><a href="../garagem/editarGaragem.html?id='+i+' ">Editar</a></td></tr>';
    };

    document.getElementById('garagens').innerHTML = html;
}

async function mostrarAnuncios() {
    const listaAnuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');

    if (listaAnuncios.length === 0) {
        const container = document.getElementById('anuncios');

        if (!container) return;

        container.innerHTML = '<p>Nenhum anúncio criado</p>';return;
    }

    let html = '<table><tr><td>Nome</td><td>Descrição</td><td>Preço</td><td>condição</td><td>excluir</td></tr>';
    for(var i = 0; i < listaAnuncios.length; i++) {
        const anuncio = listaAnuncios[i];
        html += '<tr><td>' + anuncio.nome + '</td><td>' + anuncio.descricao + '</td><td>' + anuncio.preco + '</td><td>' + anuncio.condicao + '</td><td><a href="javascript:excluirAnuncio(\'' + anuncio.id + '\')">Excluir</a></td><td><a href="../anuncios/editarAnuncio.html?id='+ i +'">Editar</a></td></tr>';

    };

    document.getElementById('anuncios').innerHTML = html;
};

async function excluirGaragem(id) {
    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]');
    const novalista = listaGaragens.filter(garagem => garagem.id !== id);
    localStorage.setItem('garagens', JSON.stringify(novalista));

    window.location.reload();
}

async function excluirAnuncio(id) {
    const listaAnuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');
    const novalista = listaAnuncios.filter(anuncio => anuncio.id !== id);
    localStorage.setItem('anuncios', JSON.stringify(novalista));

    window.location.reload();
}
