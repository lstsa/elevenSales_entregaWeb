document.addEventListener('DOMContentLoaded', () => {
    mostrarForm();
});

function mostrarForm() {
    const sessao = JSON.parse(localStorage.getItem('sessao') || '{}');
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioIndex = listaUsuarios.findIndex(u => u.usuario === sessao.usuario);

    if (usuarioIndex === -1) {
        document.getElementById('editForm').innerHTML = '<p>Usuário não encontrado.</p>';
        return;
    }

    const usuario = listaUsuarios[usuarioIndex];
    const container = document.getElementById('editForm');

    container.innerHTML = `
        <label>Usuário: <input type="text" id="usuario" value="${usuario.usuario}" /></label><br/>
        <label>Senha: <input type="password" id="senha" value="${usuario.senha}" /></label><br/>
        <label>Confirmar Senha: <input type="password" id="confirmaSenha" value="${usuario.confirmaSenha || usuario.senha}" /></label><br/>
        <label>Idade: <input type="number" id="idade" value="${usuario.idade || ''}" /></label><br/>
        <label>Telefone: <input type="text" id="telefone" value="${usuario.telefone || ''}" /></label><br/>
        <label>Email: <input type="email" id="email" value="${usuario.email || ''}" /></label><br/>
        <button id="salvar">Salvar</button>
    `;

    document.getElementById('salvar').addEventListener('click', function() {
        const novaSenha = document.getElementById('senha').value;
        const confirmaSenha = document.getElementById('confirmaSenha').value;

        if (novaSenha !== confirmaSenha) {
            alert("Senhas devem ser iguais");
            return;
        }

        listaUsuarios[usuarioIndex] = {
            usuario: document.getElementById('usuario').value,
            senha: novaSenha,
            confirmaSenha: confirmaSenha,
            idade: document.getElementById('idade').value,
            telefone: document.getElementById('telefone').value,
            email: document.getElementById('email').value
        };

        const resposta = { usuario: document.getElementById('usuario').value, senha: novaSenha };
        localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
        localStorage.setItem('sessao', JSON.stringify(resposta));

        window.location.href = '../perfil/perfil.html';
    });
}