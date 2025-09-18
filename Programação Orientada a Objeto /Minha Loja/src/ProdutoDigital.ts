import { Produto } from "./Produto";

export class ProdutoDigital extends Produto {
    constructor(
        id: number,
        nome: string,
        preco: number,
        descricao: string,
        public linkDownload: string
    ) {
        super(id, nome, preco, descricao)
    }

    public override getDescricaoCompleta(): string {
        return `${this.nome} (Digital) - Acesso via link: ${this.linkDownload}`;
    }
}
