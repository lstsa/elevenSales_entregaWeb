const sessao = JSON.parse(localStorage.getItem('sessao') || '{}');
const listaUsuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

let usuarioLogado = null;
if (sessao && sessao.usuario) {
    usuarioLogado = listaUsuarios.find(u => u.usuario === sessao.usuario);
}

if (usuarioLogado) {
    document.getElementById('nomeUsuario').textContent = usuarioLogado.usuario;
    document.getElementById('senhaUsuario').textContent = '*'.repeat(usuarioLogado.senha.length);
    document.getElementById('idadeUsuario').textContent = usuarioLogado.idade || '';
    document.getElementById('telefoneUsuario').textContent = usuarioLogado.telefone || '';
    document.getElementById('emailUsuario').textContent = usuarioLogado.email || '';
} else {
    document.getElementById('nomeUsuario').textContent = 'Não logado';
    document.getElementById('senhaUsuario').textContent = '';
    document.getElementById('idadeUsuario').textContent = '';
    document.getElementById('telefoneUsuario').textContent = '';
    document.getElementById('emailUsuario').textContent = '';
}

document.getElementById('editarPerfil').addEventListener('click', function(){
    window.location.href = '../perfil/editarPerfil.html';
});