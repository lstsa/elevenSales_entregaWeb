document.addEventListener('DOMContentLoaded', () => {
    mostrarGaragens();
});

async function mostrarGaragens() {
    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]')

    if (listaGaragens.length === 0) {

        const container = document.getElementById('garagens');

        if (!container) return;

        container.innerHTML = '<li>Nenhuma garagem criada</li>';return;
    }

    let html = '<table><tr><td>Garagens</td><td>Anuncios</td><td>Excluir</td><td>Editar</td></tr>';
    for(var i=0; i < listaGaragens.length;i++) {
        const garagem = listaGaragens[i];
        html += '<tr><td><li>' + garagem.nome + '</li></td><td><ul>'; for (let j = 0; j < garagem.anunciosGaragem.length; j++) {  const anuncio = garagem.anunciosGaragem[j]; html += '<li>' + anuncio.nome + '</li>'}
        html += '</ul></td><td><a href="javascript:excluirGaragem(\'' + i + '\')">Excluir</a></td><td><a href="../garagem/editarGaragem.html?id='+i+' ">Editar</a></td></tr>';
    };

    document.getElementById('garagens').innerHTML = html;
}

async function excluirGaragem(i) {
    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]');
    const anuncio = JSON.parse(localStorage.getItem('anuncios') || '[]');
    const garagem = listaGaragens[i];

    for (let j = 0; j < anuncio.length; j++) {
        if (anuncio[j].garagem === garagem.nome) {
            anuncio.splice(j, 1);
            j--;
        }
    }

    localStorage.setItem('anuncios', JSON.stringify(anuncio));

    listaGaragens.splice(i, 1);
    localStorage.setItem('garagens', JSON.stringify(listaGaragens));

    window.location.reload();
}

