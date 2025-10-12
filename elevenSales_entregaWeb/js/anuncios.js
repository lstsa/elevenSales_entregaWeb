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

    let html = '<table><tr><td>Nome</td><td>Descrição</td><td>Preço</td><td>condição</td><td>Vendedor</td></tr>';
    for(var i = 0; i < listaAnuncios.length; i++) {
        const anuncio = listaAnuncios[i];
        html += '<tr><td>' + anuncio.nome + '</td><td>' + anuncio.descricao + '</td><td>' + anuncio.preco + '</td><td>' + anuncio.condicao + '</td><td>'  + anuncio.nomeVendedor + '</td><td><a href="javascript:excluirAnuncio(\'' + listaAnuncios.i + '\')">Excluir</a></td><td><a href="../anuncios/editarAnuncio.html?id='+ i +'">Editar</a></td></tr>';

    };

    document.getElementById('anuncios').innerHTML = html;
};


async function excluirAnuncio(i) {
    const listaAnuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');
    listaAnuncios.splice(i, 1);
    localStorage.setItem('anuncios', JSON.stringify(listaAnuncios));

    window.location.reload();
}