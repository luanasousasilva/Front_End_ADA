export class ItemPedido {
    constructor(
        public nomeProduto: string,
        public valorUnitario: number,
        public quantidade: number
    ){}

    public calcularSubTotal(): number {
        return this.valorUnitario * this.quantidade
    }
}