export abstract class Produto {
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public descricao: string
    ){}

    public getDescricaoCompleta(): string {
        return `${this.nome} - ${this.preco.toFixed(2)}`;
    }

    toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            preco: this.preco,
            descricao: this.descricao,
        };
    }
}