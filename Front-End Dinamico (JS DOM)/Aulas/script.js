let contador = 0;
const listaCadastros = document.getElementById("listaCadastros");

// Validação e envio do formulário
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const dataNasc = document.getElementById("dataNasc").value.trim();
    const termos = document.getElementById("termos").checked;
    const mensagem = document.getElementById("mensagem");
    const contadorElemento = document.getElementById("contador");

    let erros = [];

    if (nome === "") erros.push("⚠️ O nome não pode estar vazio.");
    if (!email.includes("@")) erros.push("⚠️ O email deve conter '@'.");
    if (senha.length < 8) erros.push("⚠️ A senha deve ter no mínimo 8 caracteres.");
    if (dataNasc === "") erros.push("⚠️ A data de nascimento é obrigatória.");
    if (!termos) erros.push("⚠️ É necessário aceitar os termos.");

    if (erros.length > 0) {
        mensagem.innerHTML = erros.join("<br>");
        mensagem.className = "mt-3 fw-bold text-danger";
    } else {
        mensagem.innerHTML = "✅ Cadastro realizado com sucesso!";
        mensagem.className = "mt-3 fw-bold text-success";
        this.reset();

        // Atualiza contador
        contador++;
        contadorElemento.textContent = `Cadastros realizados: ${contador}`;

        // Adiciona nome à lista
        const li = document.createElement("li");
        li.textContent = nome;
        li.className = "list-group-item";
        listaCadastros.appendChild(li);
    }
});

// Validação reativa do email (feedback em tempo real)
document.getElementById("email").addEventListener("input", function() {
    const email = this.value.trim();
    const mensagem = document.getElementById("mensagem");

    if (email !== "" && !email.includes("@")) {
        mensagem.textContent = "⚠️ O email deve conter '@'.";
        mensagem.className = "mt-3 fw-bold text-warning";
    } else {
        mensagem.textContent = "";
    }
});
