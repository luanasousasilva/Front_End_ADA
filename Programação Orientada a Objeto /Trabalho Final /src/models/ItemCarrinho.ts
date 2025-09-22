import { Produto } from './Produto';

export class ItemCarrinho {
    private _produto: Produto;
    private _quantidade: number;

    constructor(produto: Produto, quantidade: number) {
        if (quantidade <= 0) throw new Error('Quantidade deve ser > 0');
        this._produto = produto;
        this._quantidade = quantidade;
    }

    get produto() { return this._produto; }
    get quantidade() { return this._quantidade; }

    set quantidade(q: number) {
        if (q <= 0) throw new Error('Quantidade inválida');
        this._quantidade = q;
    }

    get subtotal(): number {
        return this._produto.preco * this._quantidade;
    }

    toJSON() {
        return {
            produto: this._produto.toJSON(),
            quantidade: this._quantidade,
            subtotal: this.subtotal
        };
    }
}