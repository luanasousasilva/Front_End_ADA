class Aluno {
    constructor( matricula, nome, CR, materiasCursando = [], ativa = false){
      this.matricula = matricula;
      this.nome = nome;
      this.CR = CR;
      this.materiasCursando = materiasCursando;
      this.ativa = materiasCursando.length >= 1;
      this.alunoEngles = materiasCursando.some((codigo) => codigo.includes("ENG"));
    }
    matriculaEmCurso(codigoNovoCurso){
        this.materiasCursando.push(codigoNovoCurso);
        this.atualizarMatricula(codigoNovoCurso);
    }

    trancarCurso(codigoCurso){
        const indiceCurso = this.materiasCursando.findIndex((materia) => materia == codigoCurso);
        this.materiasCursando.splice(indiceCurso);
        this.atualizarMatricula();
    }

    atualizarMatricula(){
        this.ativa = this.materiasCursando.length >= 1;
        this.alunoEngles = this.materiasCursando.some((codigo) => codigo.includes("ENG"));

    }
}

const novoAluno = new Aluno( 5155555,  "Luana Sousa Silva",  7.8, );
console.log("Mostrando o aluno antes da primeira matricula", JSON.stringify(novoAluno));

novoAluno.matriculaEmCurso("ENG514774")
console.log("Mostrando o aluno depois da primeira matricula", JSON.stringify(novoAluno));

const novaAluna = new Aluno( 58848,  "Lua Sousa Bas",  7.9, );
console.log("Mostrando o aluno antes da primeira matricula", JSON.stringify(novoAluno));

novaAluna.trancarCurso("ENG514774")
console.log("Mostrando o aluno que trancou a materia", JSON.stringify(novoAluno));
