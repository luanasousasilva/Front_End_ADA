import { Cliente } from './Cliente';
import { ItemPedido } from './ItemPedido';

export class Pedido {
    private _total: number = 0;
    private itens: ItemPedido[] = [];
    private _status: string; // novo atributo privado

    constructor(
        public id: number,
        public data: Date,
        public cliente: Cliente
    ) {
        this._status = "pendente"; // começa sempre como pendente
        console.log(`Pedido #${this.id} criado para ${this.cliente.nome} com status inicial: ${this._status}`);
    }

    adicionarItem(item: ItemPedido): void {
        this.itens.push(item);
        this.atualizarTotal();
    }

    private atualizarTotal(): void {
        this._total = this.itens.reduce((acc, item) => acc + item.subtotal, 0);
    }

    public get total(): number {
        return this._total;
    }

    public get itensPedido(): ItemPedido[] {
        return this.itens;
    }

    // ----------------------
    // Métodos de Status
    // ----------------------

    public pagar(): void {
        if (this._status === "pendente") {
            this._status = "pago";
            console.log(`Pedido #${this.id} foi pago.`);
        } else {
            console.log(`Pedido #${this.id} não pode ser pago. Status atual: ${this._status}`);
        }
    }

    public enviar(): void {
        if (this._status === "pago") {
            this._status = "enviado";
            console.log(`Pedido #${this.id} foi enviado.`);
        } else {
            console.log(`Pedido #${this.id} não pode ser enviado. Status atual: ${this._status}`);
        }
    }

    public entregar(): void {
        if (this._status === "enviado") {
            this._status = "entregue";
            console.log(`Pedido #${this.id} foi entregue.`);
        } else {
            console.log(`Pedido #${this.id} não pode ser entregue. Status atual: ${this._status}`);
        }
    }

    // Getter público para acessar o status
    public get status(): string {
        return this._status;
    }

    // Resumo com status incluído
    public resumo(): string {
        const itensResumo = this.itens
            .map(item => `${item.quantidade}x ${item.nomeProduto} = R$ ${item.subtotal.toFixed(2)}`)
            .join("\n");

        return `Pedido #${this.id} - Cliente: ${this.cliente.nome}\nStatus: ${this._status}\nItens:\n${itensResumo}\nTotal: R$ ${this.total.toFixed(2)}`;
    }
}
