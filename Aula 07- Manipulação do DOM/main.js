const divMussum = document.getElementById("paragrafo");
console.log(divMussum.textContent);

// O próprio JS já cria uma referência para o elemento HTML com base no nome que está em seu 'id'
// const inputNome = document.getElementById("inputNome");
console.log(inputNome.value);

const arrayFilmes = [];

function salvarDadosFormulario(evt) {
    evt.preventDefault();
    const nomeFilme = inputNome.value;

    arrayFilmes.push({
        "nome": nomeFilme
    });

    console.log(`O valor do inputNome no momento é ${nomeFilme}`);

    console.log(arrayFilmes);
}