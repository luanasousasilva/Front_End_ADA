export class ItemPedido {
    private _valorUnitario: number;
    private _quantidade: number;
    constructor(
        public nomeProduto: string,
        valor: number,
        quant: number
    ){
        this._valorUnitario = 0; // Inicializa com um valor seguro
        this._quantidade = 0; // Inicializa com um valor seguro
        this.valorUnitario = valor // Usa o SETTER
        this.quantidade = quant  // Usa o SETTER
    }

    public get valorUnitario(): number {
        return this._valorUnitario;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set valorUnitario(novoValor: number) {
        if (novoValor > 0) {
            this._valorUnitario = novoValor;
        } else {
            console.log("O valor unitário deve ser positivo!");
        }
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
}