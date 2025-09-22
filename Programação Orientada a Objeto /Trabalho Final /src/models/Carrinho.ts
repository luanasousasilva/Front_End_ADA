import { ItemCarrinho } from './ItemCarrinho';
import { Produto } from './Produto';
import { Cupom } from './Cupom';

export class Carrinho {
    private _itens: ItemCarrinho[] = [];
    private _cupom?: Cupom;

    adicionarProduto(produto: Produto, quantidade: number) {
        if (quantidade <= 0) throw new Error('Quantidade inválida');
        if (produto.estoque < quantidade) throw new Error('Estoque insuficiente');
        const existe = this._itens.find(i => i.produto.id === produto.id);
        if (existe) {
            existe.quantidade = existe.quantidade + quantidade;
        } else {
            this._itens.push(new ItemCarrinho(produto, quantidade));
        }
    }

    removerProduto(produtoId: number) {
        this._itens = this._itens.filter(i => i.produto.id !== produtoId);
    }

    aplicarCupom(cupom: Cupom) {
        if (!cupom.estaValido()) throw new Error('Cupom inválido');
        this._cupom = cupom;
    }

    calcularTotal(): number {
        const subtotal = this._itens.reduce((s, it) => s + it.subtotal, 0);
        if (this._cupom) {
            return Math.max(0, this._cupom.aplicar(subtotal));
        }
        return subtotal;
    }

    listarItens() {
        return [...this._itens];
    }

    toJSON() {
        return {
            itens: this._itens.map(i => i.toJSON()),
            total: this.calcularTotal(),
            cupom: this._cupom ? this._cupom.toJSON() : null
        };
    }
}