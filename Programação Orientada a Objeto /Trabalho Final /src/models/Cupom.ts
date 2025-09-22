export abstract class Cupom {
    protected codigo: string;
    protected expiracao: Date | undefined;

    constructor(codigo: string, expiracao?: Date) {
        this.codigo = codigo;
        this.expiracao = expiracao;
    }

    estaValido(): boolean {
        if (!this.expiracao) return true;
        return new Date() <= this.expiracao;
    }

    abstract aplicar(valor: number): number;

    toJSON() {
        return {
            codigo: this.codigo,
            tipo: this.constructor.name,
            expiracao: this.expiracao ? this.expiracao.toISOString() : null
        };
    }
}

export class CupomPercentual extends Cupom {
    private percentual: number;
    constructor(codigo: string, percentual: number, expiracao?: Date) {
        super(codigo, expiracao);
        this.percentual = percentual;
    }
    aplicar(valor: number): number {
        return valor - (valor * (this.percentual / 100));
    }
}

export class CupomValorFixo extends Cupom {
    private valor: number;
    constructor(codigo: string, valor: number, expiracao?: Date) {
        super(codigo, expiracao);
        this.valor = valor;
    }
    aplicar(total: number): number {
        return Math.max(0, total - this.valor);
    }
}
