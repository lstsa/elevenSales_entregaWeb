document.addEventListener('DOMContentLoaded', () => {
    mostrarForm();
});

async function mostrarForm() {
    const form = JSON.parse(localStorage.getItem('usuario') || '[]');
    const container = document.getElementById('editForm');

    container.innerHTML = '';

    for (let i in form){

        container.innerHTML += '<label for="' + i + '">' + i + ': </label><input type="text" id="' + i + '" value="' + form[i] + '"/><br/>';
    }

    container.innerHTML += '<button id="salvar">Salvar</button>';

    document.getElementById('salvar').addEventListener('click', function() {
        for (let i in form) {
            form[i] = document.getElementById(i).value;
        }

        if (form.senha !== form.confirmaSenha) {
            alert("Senhas devem Ser Iguais");
            return;
        }

        const sessao = JSON.parse(localStorage.getItem('sessao') || '{}');

        sessao.usuario = form.usua;
        sessao.senha = form.senha;

        localStorage.setItem('sessao', JSON.stringify(sessao));

        localStorage.setItem('usuario', JSON.stringify(form));

        window.location.href = '../perfil/perfil.html';
    })

}