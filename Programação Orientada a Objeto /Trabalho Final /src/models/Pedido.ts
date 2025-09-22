import { Cliente } from './Cliente';
import { ItemCarrinho } from './ItemCarrinho';
import { Pagamento } from './Pagamento';

export class Pedido {
    private _id: number;
    private _cliente: Cliente;
    private _itens: ItemCarrinho[] = [];
    private _pagamento?: Pagamento;
    private _status: 'ABERTO'|'PAGO'|'CANCELADO' = 'ABERTO';

    constructor(id: number, cliente: Cliente, itens: ItemCarrinho[]) {
        if (itens.length === 0) throw new Error('Pedido precisa de itens');
        this._id = id;
        this._cliente = cliente;
        this._itens = itens;
    }

    total(): number {
        return this._itens.reduce((s, i) => s + i.subtotal, 0);
    }

    adicionarPagamento(p: Pagamento) {
        if (p.valor < this.total()) throw new Error('Pagamento insuficiente');
        p.confirmar();
        this._pagamento = p;
        this._status = 'PAGO';
    }

    toJSON() {
        return { id: this._id, cliente: this._cliente.toJSON(), itens: this._itens.map(i=>i.toJSON()), total: this.total(), status: this._status };
    }
}