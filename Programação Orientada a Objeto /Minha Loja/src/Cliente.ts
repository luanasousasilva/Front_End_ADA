import { Pedido } from './Pedido';

export class Cliente {
    pedidos: Pedido[] = []; // array de pedidos do cliente

    constructor(
        public id: number,
        public nome: string,
        public email: string
    ) {
        console.log(`Cliente criado: ${this.nome} (${this.email})`);
    }

    // Adiciona um pedido ao cliente
    public adicionarPedido(pedido: Pedido): void {
        this.pedidos.push(pedido);
        console.log(`Pedido #${pedido.id} adicionado ao cliente ${this.nome}`);
    }

    // Calcula o total gasto em todos os pedidos do cliente
    public calcularTotalGasto(): number {
        return this.pedidos.reduce((acc, pedido) => acc + pedido.total, 0);
    }

    // Getter para acessar os pedidos de fora (somente leitura)
    public get listaPedidos(): Pedido[] {
        return this.pedidos;
    }
}
