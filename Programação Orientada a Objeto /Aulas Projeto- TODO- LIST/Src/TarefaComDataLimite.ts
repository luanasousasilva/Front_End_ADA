import {Tarefa} from "./Tarefa";

export class TarefaComDataLimite extends Tarefa {
    public dataLimite: Date;

    constructor(id: number, descricao: string, dataLimite: Date) {
        super(id, descricao);
        this.dataLimite = dataLimite;
    }

    public getDescricaoCompleta(): string {
        const dataFormatada = this.dataLimite.toLocaleDateString("pt-BR");
        return `${this.descricao} (Entregar até: ${dataFormatada})`;
    }
}