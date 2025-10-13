document.addEventListener("DOMContentLoaded", () => {

    mostrar();
});

const params = new URLSearchParams(window.location.search);
const id = params.get('id');


async function mostrar() {
    const container = document.getElementById('editarGaragem');
    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]');
    console.log("lista:", listaGaragens);
    console.log("id:", id);

    const garagem = listaGaragens[id];
    console.log("garagem:", garagem);

    container.innerHTML = '';

    for (let i in garagem) {
        if (i === 'anunciosGaragem') {
            const listaAnuncios = garagem.anunciosGaragem;

            if (listaAnuncios.length === 0) {
                const containerAnuncios = document.getElementById('anuncios');

                if (!containerAnuncios) return;

                containerAnuncios.innerHTML = '<p>Nenhum anúncio criado</p>';return;
            }


            let html = '<table><tr><td>Nome</td><td>Descrição</td><td>Preço</td><td>condição</td><td>Garagem</td></tr>';
            html += '<h3>Anúncios na garagem ' + garagem.nome + '</h3>';
            for(var j = 0; j < listaAnuncios.length; j++) {
                const anuncio = listaAnuncios[j];
                html += '<tr><td>' + anuncio.nome + '</td><td>' + anuncio.descricao + '</td><td>' + anuncio.preco + '</td><td>' + anuncio.condicao + '</td>' + '<td>' + anuncio.garagem + '</td>' +
                '<td><a href="javascript:excluirAnuncio(' + j + ')">Excluir</a></td>' +
                '<td><a href="../anuncios/editarAnuncio.html?id=' + j + '">Editar</a></td>' +
                '<td><a href="../carrinho/carrinho.html?id=' + j + '"><button>Adicionar ao carrinho</button></a></td></tr>';


            };

            document.getElementById('anuncios').innerHTML = html;

        } else{
            container.innerHTML += '<label for="' + i + '"> '+ i +' </label><input type="text" id="' + i + '" value="' + garagem[i] + '"/><br/>';
        }
    }

    document.getElementById('container').innerHTML += '<button id="salvar">Salvar</button>';

    document.getElementById('salvar').addEventListener('click', function() {

        for (let i in garagem){
            garagem[i] = document.getElementById(i).value;
        }
        listaGaragens[id] = garagem;
        localStorage.setItem('garagens', JSON.stringify(listaGaragens));

        window.location.href = '../garagem/garagens.html';
    });
}