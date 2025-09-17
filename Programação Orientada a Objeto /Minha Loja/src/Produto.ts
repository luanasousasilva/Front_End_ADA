export abstract class Produto {
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public descricao: string
    ){}

    toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            preco: this.preco,
            descricao: this.descricao,
        };
    }
}

