document.addEventListener('DOMContentLoaded', () => {
    mostrarUsuarios();
});

document.getElementById('btnReset').addEventListener('click', function() {
    localStorage.clear();
    window.location.reload();
});

function mostrarUsuarios() {
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const container = document.getElementById('usuarios');
    if (!container) return;

    if (listaUsuarios.length === 0) {
        container.innerHTML = '<p>Nenhum usuário criado</p>';
        return;
    }

    let html = '<table border="1" cellpadding="5" cellspacing="0">';
    html += '<tr><th>Usuário</th><th>Senha</th><th>Idade</th><th>Telefone</th><th>Email</th><th>Excluir</th><th>Editar</th></tr>';
    for (let i = 0; i < listaUsuarios.length; i++) {
        const usuario = listaUsuarios[i];
        html += `<tr>
            <td>${usuario.usua}</td>
            <td>${usuario.senha}</td>
            <td>${usuario.idade}</td>
            <td>${usuario.telefone}</td>
            <td>${usuario.email}</td>
            <td><button onclick="excluirUsuario(${i})">Excluir</button></td>
            <td><a href="../adm/editarUsuario.html?id=${i}">Editar</a></td>
        </tr>`;
    }
    html += '</table>';
    container.innerHTML = html;
}

window.excluirUsuario = function(indice) {
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    listaUsuarios.splice(indice, 1);
    localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
    window.location.reload();
};