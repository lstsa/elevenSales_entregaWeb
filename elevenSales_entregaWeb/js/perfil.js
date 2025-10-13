
const sessao = JSON.parse(localStorage.getItem('usuario') || '{}');
if (sessao && sessao.usua && sessao.senha) {
	document.getElementById('nomeUsuario').textContent = sessao.usua;
	document.getElementById('senhaUsuario').textContent = '*'.repeat(sessao.senha.length);
} else {
	document.getElementById('nomeUsuario').textContent = 'Não logado';
	document.getElementById('senhaUsuario').textContent = '';
}

document.getElementById('editarPerfil').addEventListener('click', function(){
	window.location.href = '../perfil/editarPerfil.html';
})
