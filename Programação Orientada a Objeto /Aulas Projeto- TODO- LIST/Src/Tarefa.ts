export class Tarefa {
    private readonly _descricao: string
    public concluida: boolean;
    public readonly id: number;


    constructor (id: number, descricao: string  ) {
        this.id = id;
        this._descricao = descricao;
        this.concluida = false;
    }

    public get descricao() {
        return this._descricao;
    }

    public marcarComoConcluida():void{
        this.concluida = true;
    }
}
