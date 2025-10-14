document.addEventListener('DOMContentLoaded', () => {
    mostrar();

});


const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function mostrar() {
    const container = document.getElementById('editarUsuario');
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')|| '[]');

    const usuario = listaUsuarios[id];

    container.innerHTML = '';

    for (let i in usuario) {
        container.innerHTML += '<label for="' + i + '"> '+ i +' </label><input type="text" id="' + i + '" value="' + usuario[i] + '"/><br/>';
    }

    container.innerHTML += '<button id="salvar">Salvar</button>';

    document.getElementById('salvar').addEventListener('click', function(){
        for(let i in usuario) {
            usuario[i] = document.getElementById(i).value;
        }

        listaUsuarios[id] = usuario;
        localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));

        window.location.href = '../adm/admDash.html';
    });


}