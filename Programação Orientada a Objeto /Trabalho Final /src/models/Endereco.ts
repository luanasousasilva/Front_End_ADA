export class Endereco {
    private _rua: string;
    private _numero: string;
    private _cidade: string;
    private _estado: string;
    private _cep: string;

    constructor(rua: string, numero: string, cidade: string, estado: string, cep: string) {
        this._rua = rua;
        this._numero = numero;
        this._cidade = cidade;
        this._estado = estado;
        this._cep = cep;
    }

    toJSON() {
        return { rua: this._rua, numero: this._numero, cidade: this._cidade, estado: this._estado, cep: this._cep };
    }
}