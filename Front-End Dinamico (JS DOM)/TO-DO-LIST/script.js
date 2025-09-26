
const input = document.getElementById("tarefaInput");
const botao = document.getElementById("adicionarBtn");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click", function () {
    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa antes de adicionar!");
        return;
    }

    // Cria item <li> com botão excluir
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    
    li.innerHTML = `
<span>${texto}</span>
<button class="btn btn-sm btn-danger">Excluir</button>
    `;

    // Evento do botão excluir
    li.querySelector("button").addEventListener("click", function () {
        li.remove();
    });

    lista.appendChild(li);

    input.value = "";
    input.focus();
});
