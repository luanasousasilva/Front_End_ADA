const listaUsuarios = document.getElementById('lista-usuarios');
const form = document.getElementById('form-usuario');
const inputNome = document.getElementById('input-nome');

let listaDeUsuarios = [];

function adicionarUsuarioNaLista(nome){
    const novoLi = document.createElement('li');
    novoLi.textContent = `${nome}`;
    listaUsuarios.appendChild(novoLi);
}

function salvarUsuariosNoStorage() {
    localStorage.setItem('usuarios', JSON.stringify(listaDeUsuarios));
}

function renderizarUsuarios() {
    listaUsuarios.innerHTML = ''; //Limpa a lista visual
    listaDeUsuarios.forEach(usuario => {
        adicionarUsuarioNaLista(usuario.nome);
    })
}

function buscarUsuariosDaApi() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usuarios => {
            listaDeUsuarios = usuarios.map(usuario => ({ nome: usuario.name }));
            renderizarUsuarios();
            salvarUsuariosNoStorage();
        })
        .catch(erro => console.error('Erro ao buscar usuários:', erro))
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeDigitado = inputNome.value.trim();

    if (nomeDigitado) {
        const novoUsuario = { nome: nomeDigitado };
        listaDeUsuarios.push(novoUsuario);
        renderizarUsuarios();
        salvarUsuariosNoStorage();
        inputNome.value = '';
    }
});

window.onload = function() {
    const usuariosSalvos = localStorage.getItem('usuarios');
    if(usuariosSalvos) {
        listaDeUsuarios = JSON.parse(usuariosSalvos);
        renderizarUsuarios();
    } else {
        buscarUsuariosDaApi(); // Só busca da API se o storage estiver vazio
    }
}