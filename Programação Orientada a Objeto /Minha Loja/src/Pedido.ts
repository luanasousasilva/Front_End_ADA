export class Pedido {
    private _total: number = 0;

    constructor(
        public id: number,
        public data: Date
    ) {
        console.log(`Pedido #${this.id} criado com sucesso na data ${this.data}`);
    }

    // Getter e setter para total (opcional)
    public get total(): number {
        return this._total;
    }

    public set total(valor: number) {
        if (valor >= 0) {
            this._total = valor;
        } else {
            console.error('Total não pode ser negativo');
        }
    }
}
