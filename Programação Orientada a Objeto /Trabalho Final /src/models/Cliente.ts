import { Endereco } from './Endereco';
import { Carrinho } from './Carrinho';
import { Pedido } from './Pedido';

export class Cliente {
    private _id: number;
    private _nome: string;
    private _email: string;
    private _endereco: Endereco | undefined;
    private _historico: Pedido[] = [];
    private _carrinho: Carrinho;

    constructor(id: number, nome: string, email: string, endereco?: Endereco) {
        if (!nome) throw new Error('Nome obrigatório');
        if (!email || !email.includes('@')) throw new Error('Email inválido');
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._endereco = endereco;
        this._carrinho = new Carrinho();
    }

    get id() { return this._id; }
    get nome() { return this._nome; }
    get email() { return this._email; }
    get carrinho() { return this._carrinho; }

    finalizarCompra(pedidoId: number): Pedido {
        const itens = this._carrinho.listarItens();
        if (itens.length === 0) throw new Error('Carrinho vazio');

        // 1) checar disponibilidade para todos os itens
        for (const it of itens) {
            if (it.produto.estoque < it.quantidade) {
                throw new Error(`Estoque insuficiente para o produto ${it.produto.nome}`);
            }
        }

        // 2) efetivar baixa de estoque (agora que todos estão ok)
        for (const it of itens) {
            const ok = it.produto.baixarEstoque(it.quantidade);
            if (!ok) {
                // caso improvável (concorrência/sincronização), lançar erro
                throw new Error(`Falha ao diminuir estoque do produto ${it.produto.nome}`);
            }
        }

        // 3) criar pedido e adicionar ao histórico
        const pedido = new Pedido(pedidoId, this, itens);
        this._historico.push(pedido);
        this._carrinho = new Carrinho(); // novo carrinho vazio para o cliente
        return pedido;
    }

    listarHistorico() {
        return [...this._historico];
    }

    toJSON() {
        return {
            id: this._id,
            nome: this._nome,
            email: this._email,
            endereco: this._endereco ? this._endereco.toJSON() : null };
    }
}