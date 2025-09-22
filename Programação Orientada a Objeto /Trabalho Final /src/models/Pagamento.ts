export abstract class Pagamento {
    protected _valor: number;
    protected _confirmado: boolean = false;
    protected _data?: Date;

    constructor(valor: number) {
        this._valor = valor;
    }

    confirmar() {
        this._confirmado = true;
        this._data = new Date();
    }

    get valor() { return this._valor; }
    get confirmado() { return this._confirmado; }

    abstract detalhes(): string; // polimorfismo

    toJSON() {
        return {
            tipo: this.constructor.name,
            valor: this._valor,
            confirmado: this._confirmado,
            data: this._data ? this._data.toISOString() : null
        };
    }
}

export class CartaoCredito extends Pagamento {
    private parcelas: number;
    constructor(valor: number, parcelas: number = 1) {
        super(valor);
        this.parcelas = parcelas;
    }
    detalhes() { return `Pagamento com Cartão em ${this.parcelas}x`; }
}

export class Pix extends Pagamento {
    detalhes() { return `Pagamento via PIX`; }
}
