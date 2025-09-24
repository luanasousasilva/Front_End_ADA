document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const dataNasc = document.getElementById("dataNasc").value.trim();
  const termos = document.getElementById("termos").checked;
  const mensagem = document.getElementById("mensagem");

  let erros = [];

  if (nome === "") {
    erros.push("⚠️ O nome não pode estar vazio.");
  }
  if (!email.includes("@")) {
    erros.push("⚠️ O email deve conter '@'.");
  }
  if (senha.length < 8) {
    erros.push("⚠️ A senha deve ter no mínimo 8 caracteres.");
  }
  if (dataNasc === "") {
    erros.push("⚠️ A data de nascimento é obrigatória.");
  }
  if (!termos) {
    erros.push("⚠️ É necessário aceitar os termos.");
  }

  if (erros.length > 0) {
    mensagem.innerHTML = erros.join("<br>");
    mensagem.className = "mt-3 fw-bold text-danger";
  } else {
    mensagem.innerHTML = "✅ Cadastro realizado com sucesso!";
    mensagem.className = "mt-3 fw-bold text-success";
    this.reset();
  }
});
