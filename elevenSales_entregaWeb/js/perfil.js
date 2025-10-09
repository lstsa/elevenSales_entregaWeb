// Busca usuário logado do localStorage
const sessao = JSON.parse(localStorage.getItem('sessao'));
if (sessao && sessao.usua && sessao.senha) {
	document.getElementById('nomeUsuario').textContent = sessao.usua;
	document.getElementById('senhaUsuario').textContent = '*'.repeat(sessao.senha.length);
} else {
	document.getElementById('nomeUsuario').textContent = 'Não logado';
	document.getElementById('senhaUsuario').textContent = '';
}
// Botões de edição (apenas exemplo, sem funcionalidade)
document.getElementById('editarNome').onclick = function() {
	if (!sessao || !sessao.usua) return;
	const novoNome = prompt('Digite o novo nome de usuário:', sessao.usua);
	if (novoNome && novoNome.trim() !== '' && novoNome !== sessao.usua) {
		// Atualiza na tela
		document.getElementById('nomeUsuario').textContent = novoNome;
		// Atualiza na sessão
		sessao.usua = novoNome;
		localStorage.setItem('sessao', JSON.stringify(sessao));
		// Atualiza na listaUsuarios
		let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
		const idx = listaUsuarios.findIndex(u => u.usua === sessao.usua && u.senha === sessao.senha);
		if (idx !== -1) {
			listaUsuarios[idx].usua = novoNome;
			localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
		}
		alert('Nome de usuário alterado com sucesso!');
	}
};
document.getElementById('editarSenha').onclick = function() {
	alert('Funcionalidade de edição de senha ainda não implementada.');
};
