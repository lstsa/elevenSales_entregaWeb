document.getElementById('criarGaragem').addEventListener('click', function() {
    criarGaragem();
});

async function criarGaragem() {

    const nomeGaragem = document.getElementById('nomeGaragem').value;


    if (!nomeGaragem) {
        alert('Selecione um nome antes de criar a Garagem.');
        return;
    }

    const novaGaragem = {'nome': nomeGaragem, 'anunciosGaragem': []};

    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]');

    listaGaragens.push(novaGaragem);
    localStorage.setItem('garagens', JSON.stringify(listaGaragens));

    window.location.href = '../garagem/garagens.html';

}