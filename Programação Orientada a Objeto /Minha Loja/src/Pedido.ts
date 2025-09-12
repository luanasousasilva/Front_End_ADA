import { Cliente } from './Cliente';
import { ItemPedido } from './ItemPedido';

export class Pedido {
    private _total: number = 0;
    private _status: string = "pendente";

    public cliente: Cliente;
    private _itens: ItemPedido[] = [];

    constructor(
        public id: number,
        public data: Date,
        cliente: Cliente
    ) {
        this.cliente = cliente;
        console.log(`Pedido #${this.id} criado na data ${this.data.toLocaleString()}!`);
    }

    public adicionarItem(item: ItemPedido): void {
        this._itens.push(item);
        this.atualizarTotal();
    }

    private atualizarTotal(): void {
        let totalCalculado = 0;
        for (const item of this._itens) {
            totalCalculado += item.calcularSubTotal();
        }
        this._total = totalCalculado;
    }

    public get total(): number {
        return this._total;
    }

    public obterResumo(): string {
        let resumo = `Pedido #${this.id} - Cliente: ${this.cliente.nome}\n`;
        resumo += `Data: ${this.data.toLocaleDateString()}\n`
        resumo += `Itens:\n`;
        for (const item of this._itens) {
            resumo += ` - ${item.nomeProduto}: ${item.quantidade} x R$ ${item.valorUnitario.toFixed(2)} = R$ ${item.calcularSubTotal().toFixed(2)}\n`
        }
        resumo += `Total: R$ ${this.total.toFixed(2)}`
        return resumo;
    }

    public pagar(): void {
        this._status = "pago";
    }

    public enviar(): void {
        if (this._status === "pago") {
            this._status = "enviado";
        }
    }

    public entregar(): void {
        if (this._status === "enviado") {
            this._status = "entregue";
        }
    }

    public get status(): string {
        return this._status;
    }

}