import { Produto } from "./Produto";

export class ItemPedido {
    constructor(
        private _produto: Produto,
        private _quantidade: number
    ){

    }

    public get valorUnitario(): number {
        return this._produto.preco;
    }

    public get nomeProduto(): string {
        return this._produto.nome
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(novaQuantidade: number) {
        if (novaQuantidade > 0) {
            this._quantidade = novaQuantidade
        } else {
            console.log("A quantidade deve ser positiva!");
        }
    }


    public calcularSubTotal(): number {
        return this.valorUnitario * this.quantidade
    }

    public toJSON() {
        return {
            produto: this._produto.toJSON(),
            quantidade: this._quantidade
        }
    }
}