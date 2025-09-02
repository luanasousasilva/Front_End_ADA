export class Tarefa {
    private _descricao: string
    public  concluida; boolean: any;
    public  readonly id; number: any;

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
