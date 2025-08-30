// Um exemplo de array com múltiplos valores distintos
const arrayAluno = [1413121, "Luis Fernando Teixeira Bicalho", 7.2, ["ENG4021", "INF1034", "EMP1500"], true];

// Cria-se um objeto desta forma, por exemplo:
let objAluno = {
    matricula: 1413121,
    nome: "Luis Fernando Teixeira Bicalho",
    CR: 7.2,
    materiasCursando: ["ENG4021", "INF1034", "EMP1500"],
    ativa: true,
};

console.log(objAluno);

// Cria-se um objeto TAMBÉM desta forma:
objAluno = {
    'matricula': 1413121,
    'nome': 'Luis Fernando Teixeira Bicalho',
    'CR': 7.2,
    'materiasCursando': ['ENG4021', 'INF1034', 'EMP1500'],
    'ativa': true,
};

console.log(objAluno);


// Como eu posso acessar o CR de um aluno?
console.log("Acessando uma propriedade do objeto usando ponto:", objAluno.CR);
console.log("Acessando uma propriedade do objeto usando colchetes e a chave como string:", objAluno["CR"]);

// Esta segunda maneira é interessante quando eu for armazenar a chave dentro de uma variável
const chave = "CR";
console.log("Acessando uma propriedade do objeto usando colchetes e a chave como string:", objAluno[chave]);

const turmaDeAlunos = [
  {
    matricula: 1413121,
    nome: 'Luís Fernando Teixeira Bicalho',
    CR: 7.2,
    materiasCursando: ['ENG4021', 'INF1034', 'EMP1500'],
    ativa: true,
  },
  {
    matricula: 1322456,
    nome: 'Rita de Cássia',
    CR: 7.2,
    materiasCursando: ['ENG4021', 'INF1034', 'EMP1500'],
    ativa: true,
  }
];

// Exemplo de uso:
console.log("Primeiro aluno:", turmaDeAlunos[0].nome);
console.log("Segundo aluno:", turmaDeAlunos[1].nome);
console.log("Materias do segundo aluno:", turmaDeAlunos[1].materiasCursando);