
class Filme {
    constructor(nome, diretor, avaliacao, data, duracao, streaming, poster) {

        if (nome == "" || nome == null) {
            throw new Error("O nome do filme é obrigatório!");
        }

        var nota = Number(avaliacao);
        if (isNaN(nota) || nota < 0 || nota > 10) {
            throw new Error("A avaliação deve ser um número entre 0 e 10!");
        }

        var dur = Number(duracao);
        if (isNaN(dur) || dur < 0) {
            throw new Error("A duração deve ser um número positivo!");
        }

        this.nome = nome;
        this.diretor = diretor || "";
        this.avaliacao = nota;
        this.data = data || "";
        this.duracao = dur;
        this.streaming = streaming == "true" || streaming == true;
        this.poster = poster || "";
        this.descricao = "Uma história envolvente dirigida por " + (diretor || "desconhecido") + ".";
    }
}

class Catalogo {
    constructor() {
        this.listaDeFilmes = [];
    }

    adicionar(filme) {
        for (var i = 0; i < this.listaDeFilmes.length; i++) {
            if (this.listaDeFilmes[i].nome.toLowerCase() == filme.nome.toLowerCase()) {
                // Atualiza o filme existente
                this.listaDeFilmes[i] = filme;
                return;
            }
        }
        this.listaDeFilmes.push(filme);
    }

    excluir(nome) {
        var novaLista = [];
        var encontrado = false;
        for (var i = 0; i < this.listaDeFilmes.length; i++) {
            if (this.listaDeFilmes[i].nome.toLowerCase() != nome.toLowerCase()) {
                novaLista.push(this.listaDeFilmes[i]);
            } else {
                encontrado = true;
            }
        }
        this.listaDeFilmes = novaLista;
        if (!encontrado) {
            throw new Error("Filme não encontrado para excluir!");
        }
    }

    buscar(nome) {
        for (var i = 0; i < this.listaDeFilmes.length; i++) {
            if (this.listaDeFilmes[i].nome.toLowerCase() == nome.toLowerCase()) {
                return this.listaDeFilmes[i];
            }
        }
        return null;
    }

    encontrarFilmePorDuracao(tipo) {
        if (this.listaDeFilmes.length == 0) {
            throw new Error("Nenhum filme cadastrado!");
        }
        if (tipo != "maior" && tipo != "menor") {
            throw new Error("Tipo inválido! Use 'maior' ou 'menor'.");
        }
        var filmeEscolhido = this.listaDeFilmes[0];
        for (var i = 1; i < this.listaDeFilmes.length; i++) {
            if (tipo == "maior" && this.listaDeFilmes[i].duracao > filmeEscolhido.duracao) {
                filmeEscolhido = this.listaDeFilmes[i];
            }
            if (tipo == "menor" && this.listaDeFilmes[i].duracao < filmeEscolhido.duracao) {
                filmeEscolhido = this.listaDeFilmes[i];
            }
        }
        return filmeEscolhido;
    }
}

var catalogo = new Catalogo();

var filmesIniciais = [
    {
        nome: "Interestelar",
        diretor: "Christopher Nolan",
        avaliacao: 8.6,
        data: "2014-11-06",
        duracao: 169,
        streaming: true,
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
    },
    {
        nome: "Breaking Bad",
        diretor: "Vince Gilligan",
        avaliacao: 9.5,
        data: "2008-01-20",
        duracao: 49,
        streaming: true,
        poster: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg"
    },
    {
        nome: "O Poderoso Chefão",
        diretor: "Francis Ford Coppola",
        avaliacao: 9.2,
        data: "1972-09-10",
        duracao: 175,
        streaming: false,
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
    },
    {
        nome: "Cidade de Deus",
        diretor: "Fernando Meirelles",
        avaliacao: 8.6,
        data: "2002-08-30",
        duracao: 130,
        streaming: true,
        poster: "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
    },
    {
        nome: "Clube da Luta",
        diretor: "David Fincher",
        avaliacao: 8.8,
        data: "1999-10-15",
        duracao: 139,
        streaming: true,
        poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
    },
    {
        nome: "Forrest Gump",
        diretor: "Robert Zemeckis",
        avaliacao: 8.8,
        data: "1994-07-06",
        duracao: 142,
        streaming: true,
        poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
    },
    {
        nome: "A Origem",
        diretor: "Christopher Nolan",
        avaliacao: 8.8,
        data: "2010-07-16",
        duracao: 148,
        streaming: true,
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        nome: "Matrix",
        diretor: "Lana e Lilly Wachowski",
        avaliacao: 8.7,
        data: "1999-03-31",
        duracao: 136,
        streaming: true,
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
    }
];

for (var i = 0; i < filmesIniciais.length; i++) {
    var filme = filmesIniciais[i];
    try {
        var novoFilme = new Filme(
            filme.nome,
            filme.diretor,
            filme.avaliacao,
            filme.data,
            filme.duracao,
            filme.streaming,
            filme.poster
        );
        catalogo.adicionar(novoFilme);
    } catch (erro) {
        console.log("Erro ao adicionar filme " + filme.nome + ": " + erro.message);
    }
}

var ordenacao = null;
var filtros = {
    busca: "",
    nota: 0,
    streaming: "all"
};

function pegarElemento(id) {
    var elemento = document.getElementById(id);
    if (elemento == null) {
        console.log("Não achei o elemento com ID: " + id);
    }
    return elemento;
}

function pegarDadosDoFormulario() {
    var dados = {};
    dados.nome = pegarElemento("nome").value || "";
    dados.diretor = pegarElemento("diretor").value || "";
    dados.avaliacao = pegarElemento("avaliacao").value || "";
    dados.data = pegarElemento("data").value || "";
    dados.duracao = pegarElemento("duracao").value || "";
    dados.streaming = pegarElemento("streaming").value || "false";
    dados.poster = pegarElemento("poster").value || "";
    return dados;
}

function preencherCampos(filme) {
    var campoNome = pegarElemento("nome");
    var campoDiretor = pegarElemento("diretor");
    var campoAvaliacao = pegarElemento("avaliacao");
    var campoData = pegarElemento("data");
    var campoDuracao = pegarElemento("duracao");
    var campoStreaming = pegarElemento("streaming");
    var campoPoster = pegarElemento("poster");
    if (campoNome) campoNome.value = filme.nome;
    if (campoDiretor) campoDiretor.value = filme.diretor;
    if (campoAvaliacao) campoAvaliacao.value = filme.avaliacao;
    if (campoData) campoData.value = filme.data;
    if (campoDuracao) campoDuracao.value = filme.duracao;
    if (campoStreaming) campoStreaming.value = filme.streaming.toString();
    if (campoPoster) campoPoster.value = filme.poster;
}

function limparCampos() {
    var campos = ["nome", "diretor", "avaliacao", "data", "duracao", "poster"];
    for (var i = 0; i < campos.length; i++) {
        var campo = pegarElemento(campos[i]);
        if (campo) campo.value = "";
    }
    var campoStreaming = pegarElemento("streaming");
    if (campoStreaming) campoStreaming.value = "true";
}

function mostrarMensagem(texto, tipo) {
    var divMensagem = pegarElemento("form-error");
    if (divMensagem) {
        divMensagem.textContent = texto;
        if (tipo == "success") {
            divMensagem.className = "error text-success";
        } else {
            divMensagem.className = "error text-danger";
        }
        divMensagem.style.opacity = "1";
        divMensagem.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(function() {
            divMensagem.style.opacity = "0";
            setTimeout(function() {
                divMensagem.textContent = "";
                divMensagem.className = "error";
            }, 500);
        }, 3000);
    }
}

function filtrarEOrdenar(lista) {
    var novaLista = [];
    for (var i = 0; i < lista.length; i++) {
        novaLista.push(lista[i]);
    }

    if (filtros.busca != "") {
        var tempLista = [];
        for (var i = 0; i < novaLista.length; i++) {
            if (novaLista[i].nome.toLowerCase().indexOf(filtros.busca.toLowerCase()) != -1) {
                tempLista.push(novaLista[i]);
            }
        }
        novaLista = tempLista;
    }

    if (filtros.nota > 0) {
        var tempLista = [];
        for (var i = 0; i < novaLista.length; i++) {
            if (novaLista[i].avaliacao >= filtros.nota) {
                tempLista.push(novaLista[i]);
            }
        }
        novaLista = tempLista;
    }

    if (filtros.streaming != "all") {
        var tempLista = [];
        for (var i = 0; i < novaLista.length; i++) {
            if (novaLista[i].streaming.toString() == filtros.streaming) {
                tempLista.push(novaLista[i]);
            }
        }
        novaLista = tempLista;
    }

    if (ordenacao != null) {
        for (var i = 0; i < novaLista.length; i++) {
            for (var j = i + 1; j < novaLista.length; j++) {
                var valorA = novaLista[i][ordenacao.campo];
                var valorB = novaLista[j][ordenacao.campo];
                if (ordenacao.campo == "data") {
                    valorA = valorA ? new Date(valorA).getTime() : 0;
                    valorB = valorB ? new Date(valorB).getTime() : 0;
                } else if (ordenacao.campo == "nome") {
                    valorA = valorA.toLowerCase();
                    valorB = valorB.toLowerCase();
                }
                var trocar = false;
                if (ordenacao.ordem == "asc" && valorA > valorB) {
                    trocar = true;
                } else if (ordenacao.ordem == "desc" && valorA < valorB) {
                    trocar = true;
                }
                if (trocar) {
                    var temp = novaLista[i];
                    novaLista[i] = novaLista[j];
                    novaLista[j] = temp;
                }
            }
        }
    }

    return novaLista;
}

function mostrarCards() {
    var container = pegarElemento("cards-container");
    if (!container) return;
    container.innerHTML = "";

    var filmesFiltrados = filtrarEOrdenar(catalogo.listaDeFilmes);

    if (filmesFiltrados.length == 0) {
        container.innerHTML = "<div style='grid-column: 1 / -1; text-align: center; padding: 40px;'>" +
            "<h3>Nenhum filme encontrado</h3>" +
            "<p>Adicione filmes para visualizar aqui.</p>" +
            "</div>";
        return;
    }

    for (var i = 0; i < filmesFiltrados.length; i++) {
        var filme = filmesFiltrados[i];
        var card = document.createElement("div");
        card.className = "film-card";
        card.setAttribute("data-nome", filme.nome);
        var ano = filme.data ? new Date(filme.data).getFullYear() : "-";
        var poster = filme.poster || "https://via.placeholder.com/280x380?text=Sem+Poster";
        card.innerHTML = "<img src='" + poster + "' alt='" + filme.nome + "' class='film-poster'>" +
            "<div class='film-info'>" +
            "<h3 class='film-title'>" + filme.nome + "</h3>" +
            "<p class='film-details'><strong>Diretor:</strong> " + (filme.diretor || "-") + "</p>" +
            "<p class='film-details'><strong>Ano:</strong> " + ano + "</p>" +
            "<p class='film-details'><strong>Duração:</strong> " + filme.duracao + " min</p>" +
            "<p class='film-details'><strong>Descrição:</strong> " + filme.descricao + "</p>" +
            "<div class='film-meta'>" +
            "<span class='film-rating'>⭐ " + filme.avaliacao.toFixed(1) + "</span>" +
            "<span class='film-streaming " + (filme.streaming ? "streaming-yes" : "streaming-no") + "'>" +
            (filme.streaming ? "Disponível" : "Indisponível") + "</span>" +
            "</div></div>";
        container.appendChild(card);
    }
}

document.addEventListener("click", function(evento) {
    if (evento.target.closest(".film-card")) {
        var card = evento.target.closest(".film-card");
        var nome = card.getAttribute("data-nome");
        var filme = catalogo.buscar(nome);
        if (filme == null) {
            mostrarMensagem("Filme não encontrado!", "danger");
        } else {
            preencherCampos(filme);
            mostrarMensagem("Filme carregado no formulário!", "success");
        }
        return;
    }
    if (!evento.target.closest(".film-card") && !evento.target.closest(".crud-form")) {
        limparCampos();
    }
});

function configurarBotoes() {
    var btnSalvar = pegarElemento("btnSalvar");
    var btnAcessar = pegarElemento("btnAcessar");
    var btnExcluir = pegarElemento("btnExcluir");
    var btnLimpar = pegarElemento("btnclear");
    var btnOrdenarNota = pegarElemento("sortRating");
    var btnOrdenarNome = pegarElemento("sortName");
    var btnOrdenarAno = pegarElemento("sortYear");
    var btnAltaNota = pegarElemento("btnAltaAvaliacao");
    var btnStreaming = pegarElemento("btnStreaming");
    var btnMaiorMenor = pegarElemento("btnMaiorMenor");
    var btnMedia = pegarElemento("btnMedia");
    var campoBusca = pegarElemento("searchInput");
    var filtroNota = pegarElemento("filterRating");
    var filtroStreaming = pegarElemento("filterStreaming");

    if (btnSalvar) {
        btnSalvar.addEventListener("click", function() {
            try {
                var dados = pegarDadosDoFormulario();
                var filme = new Filme(dados.nome, dados.diretor, dados.avaliacao, dados.data, dados.duracao, dados.streaming, dados.poster);
                catalogo.adicionar(filme);
                mostrarCards();
                limparCampos();
                mostrarMensagem("Filme salvo com sucesso!", "success");
            } catch (erro) {
                mostrarMensagem(erro.message, "danger");
            }
        });
    }

    if (btnAcessar) {
        btnAcessar.addEventListener("click", function() {
            var nome = pegarElemento("nome").value;
            if (nome == "") {
                mostrarMensagem("Digite o nome do filme para acessar!", "danger");
                return;
            }
            var filme = catalogo.buscar(nome);
            if (filme == null) {
                mostrarMensagem("Filme não encontrado!", "danger");
            } else {
                preencherCampos(filme);
                mostrarMensagem("Filme carregado com sucesso!", "success");
            }
        });
    }

    if (btnExcluir) {
        btnExcluir.addEventListener("click", function() {
            var nome = pegarElemento("nome").value;
            if (nome == "") {
                mostrarMensagem("Digite o nome do filme para excluir!", "danger");
                return;
            }
            try {
                catalogo.excluir(nome);
                mostrarCards();
                limparCampos();
                mostrarMensagem("Filme excluído com sucesso!", "success");
            } catch (erro) {
                mostrarMensagem(erro.message, "danger");
            }
        });
    }

    if (btnLimpar) {
        btnLimpar.addEventListener("click", function() {
            limparCampos();
            mostrarMensagem("Formulário limpo com sucesso!", "success");
        });
    }

    if (btnOrdenarNota) {
        btnOrdenarNota.addEventListener("click", function() {
            if (ordenacao != null && ordenacao.campo == "avaliacao" && ordenacao.ordem == "asc") {
                ordenacao = { campo: "avaliacao", ordem: "desc" };
            } else {
                ordenacao = { campo: "avaliacao", ordem: "asc" };
            }
            mostrarCards();
            mostrarMensagem("Ordenado por avaliação (" + (ordenacao.ordem == "asc" ? "crescente" : "decrescente") + ")", "success");
        });
    }

    if (btnOrdenarNome) {
        btnOrdenarNome.addEventListener("click", function() {
            if (ordenacao != null && ordenacao.campo == "nome" && ordenacao.ordem == "asc") {
                ordenacao = { campo: "nome", ordem: "desc" };
            } else {
                ordenacao = { campo: "nome", ordem: "asc" };
            }
            mostrarCards();
            mostrarMensagem("Ordenado por nome (" + (ordenacao.ordem == "asc" ? "crescente" : "decrescente") + ")", "success");
        });
    }

    if (btnOrdenarAno) {
        btnOrdenarAno.addEventListener("click", function() {
            if (ordenacao != null && ordenacao.campo == "data" && ordenacao.ordem == "asc") {
                ordenacao = { campo: "data", ordem: "desc" };
            } else {
                ordenacao = { campo: "data", ordem: "asc" };
            }
            mostrarCards();
            mostrarMensagem("Ordenado por ano (" + (ordenacao.ordem == "asc" ? "crescente" : "decrescente") + ")", "success");
        });
    }

    if (btnAltaNota) {
        btnAltaNota.addEventListener("click", function() {
            var lista = "";
            for (var i = 0; i < catalogo.listaDeFilmes.length; i++) {
                if (catalogo.listaDeFilmes[i].avaliacao > 6) {
                    if (lista != "") lista += ", ";
                    lista += catalogo.listaDeFilmes[i].nome;
                }
            }
            if (lista == "") {
                mostrarMensagem("Nenhum filme com avaliação maior que 6!", "success");
            } else {
                mostrarMensagem("Filmes com avaliação > 6: " + lista, "success");
            }
        });
    }

    if (btnStreaming) {
        btnStreaming.addEventListener("click", function() {
            var lista = "";
            for (var i = 0; i < catalogo.listaDeFilmes.length; i++) {
                if (catalogo.listaDeFilmes[i].streaming == true) {
                    if (lista != "") lista += ", ";
                    lista += catalogo.listaDeFilmes[i].nome;
                }
            }
            if (lista == "") {
                mostrarMensagem("Nenhum filme disponível em streaming!", "success");
            } else {
                mostrarMensagem("Filmes em streaming: " + lista, "success");
            }
        });
    }

    if (btnMaiorMenor) {
        btnMaiorMenor.addEventListener("click", function() {
            try {
                var maior = catalogo.encontrarFilmePorDuracao("maior");
                var menor = catalogo.encontrarFilmePorDuracao("menor");
                mostrarMensagem("Maior duração: " + maior.nome + " (" + maior.duracao + " min) | Menor duração: " + menor.nome + " (" + menor.duracao + " min)", "success");
            } catch (erro) {
                mostrarMensagem(erro.message, "danger");
            }
        });
    }

    if (btnMedia) {
        btnMedia.addEventListener("click", function() {
            if (catalogo.listaDeFilmes.length == 0) {
                mostrarMensagem("Nenhum filme cadastrado para calcular média!", "danger");
                return;
            }
            var soma = 0;
            for (var i = 0; i < catalogo.listaDeFilmes.length; i++) {
                soma += catalogo.listaDeFilmes[i].avaliacao;
            }
            var media = soma / catalogo.listaDeFilmes.length;
            mostrarMensagem("Média das avaliações: " + media.toFixed(2), "success");
        });
    }

    if (campoBusca) {
        campoBusca.addEventListener("input", function() {
            filtros.busca = campoBusca.value;
            mostrarCards();
        });
    }

    if (filtroNota) {
        filtroNota.addEventListener("change", function() {
            filtros.nota = Number(filtroNota.value);
            mostrarCards();
        });
    }

    if (filtroStreaming) {
        filtroStreaming.addEventListener("change", function() {
            filtros.streaming = filtroStreaming.value;
            mostrarCards();
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    configurarBotoes();
    mostrarCards();
});