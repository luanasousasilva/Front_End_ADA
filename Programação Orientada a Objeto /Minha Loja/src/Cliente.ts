import { Pedido } from './Pedido';

export class Cliente {
    public pedidos: Pedido[] = [];
    private _id: number;
    private _nome: string;
    private _email: string;
    constructor(
        id: number,
        nome: string,
        email: string
    ) {
        this._id = id;
        this._nome = ""; // Inicializa com valor seguro
        this._email = ""; // Inicializa com valor seguro
        this.nome = nome;
        this.email = email;
        console.log(`Cliente ${this.nome} criado com sucesso!`);
    }

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get email(): string {
        return this._email;
    }

    public set nome(novoNome: string) {
        if (novoNome.length >= 2) {
            this._nome = novoNome;
        } else {
            console.log("Erro: O nome deve ter pelo menos 2 caracteres!");
        }
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
}
