import { Produto } from "./Produto";

export class ProdutoFisico extends Produto {
    constructor(
        id: number,
        nome: string,
        preco: number,
        descricao: string,
        public pesoEmGramas: number
    ) {
        super(id, nome, preco, descricao)
    }

    public override getDescricaoCompleta(): string {
        const descricaoBase = super.getDescricaoCompleta();
        return `${descricaoBase} | Peso: ${this.pesoEmGramas}`;
    }
}