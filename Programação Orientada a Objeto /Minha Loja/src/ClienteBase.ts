import { Pedido } from "./Pedido";

export abstract class ClienteBase {
    public pedidos: Pedido[] = [];
    private _id: number;
    private _email: string;
    constructor(
        id: number,
        email: string
    ) {
        this._id = id;
        this._email = ""; // Inicializa com valor seguro
        this.email = email;
    }

    public get id(): number {
        return this._id;
    }

    public get email(): string {
        return this._email;
    }

    public set email(novoEmail: string) {
        if (novoEmail.includes('@')) {
            this._email = novoEmail;
        } else {
            console.log("Erro: O e-mail informado é inválido!");
        }
    }

    public adicionarPedido(pedido: Pedido): void {
        this.pedidos.push(pedido);
    }

    public calcularTotalGasto(): number {
        let total = 0;
        for (const pedido of this.pedidos) {
            total += pedido.total;
        }
        return total;
    }

    public toJSON() {
        return {
            id: this.id,
            email: this.email
        }
    }

    public aplicarAtualizacoes(dados: any): void {
        if(dados.email) {
            this.email = dados.email;
        }
    }
}
