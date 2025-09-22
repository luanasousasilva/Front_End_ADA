export class Produto {
    private static _contador: number = 0;
    private _id: number;
    private _nome: string;
    private _descricao: string;
    private _preco: number;
    private _estoque: number;

    constructor(id: number, nome: string, descricao: string, preco: number, estoque: number) {
        if (!nome) throw new Error('Nome obrigatório');
        if (preco < 0) throw new Error('Preço inválido');
        if (estoque < 0) throw new Error('Estoque inválido');

        this._id = id;
        this._nome = nome;
        this._descricao = descricao;
        this._preco = preco;
        this._estoque = estoque;
        Produto._contador++;
    }

    static totalProdutosCriados(): number {
        return Produto._contador;
    }

    get id() { return this._id; }
    get nome() { return this._nome; }
    set nome(v: string) {
        if (!v) throw new Error('Nome inválido');
        this._nome = v;
    }

    get preco() { return this._preco; }
    set preco(v: number) {
        if (v < 0) throw new Error('Preço inválido');
        this._preco = v;
    }

    get estoque() { return this._estoque; }

    baixarEstoque(qtd: number): boolean {
        if (qtd <= 0) return false;
        if (this._estoque >= qtd) {
            this._estoque -= qtd;
            return true;
        }
        return false;
    }

    reporEstoque(qtd: number) {
        if (qtd <= 0) throw new Error('Quantidade inválida');
        this._estoque += qtd;
    }

    toJSON() {
        return {
            id: this._id,
            nome: this._nome,
            descricao: this._descricao,
            preco: this._preco,
            estoque: this._estoque
        };
    }
}
