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

    let html = '<table><tr><td>Garagens</td><td>Excluir</td><td>Editar</td></tr>';
    for(var i=0; i < listaGaragens.length;i++) {
        const garagem = listaGaragens[i];
        html += '<tr><td><li>' + garagem.nome + '</li></td><td><a href="javascript:excluirGaragem(\'' + listaGaragens.i + '\')">Excluir</a></td><td><a href="../garagem/editarGaragem.html?id='+i+' ">Editar</a></td></tr>';
    };

    document.getElementById('garagens').innerHTML = html;
}

async function excluirGaragem(i) {
    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]');
    listaGaragens.splice(i, 1);
    localStorage.setItem('garagens', JSON.stringify(listaGaragens));

    window.location.reload();
}

