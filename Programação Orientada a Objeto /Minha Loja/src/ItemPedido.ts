export class ItemPedido {
    constructor(
        public nomeProduto: string,
        public valorUnitario: number,
        public quantidade: number
    ) {
        console.log(`Item adicionado: ${this.quantidade}x ${this.nomeProduto} (R$ ${this.valorUnitario.toFixed(2)} cada)`);
    }

    get subtotal(): number {
        return this.valorUnitario * this.quantidade;
    }
}