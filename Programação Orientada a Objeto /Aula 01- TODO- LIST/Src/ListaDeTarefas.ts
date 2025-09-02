import {Tarefa} from "./Tarefa";

export class ListaDeTarefas {
    private tarefas: Tarefa[] = [];
    private proximoId: number = 1;

    public adicionarTarefa(descricao: string): Tarefa {
        const tarefa = new Tarefa(this.proximoId++, descricao);
        this.tarefas.push(tarefa);
        return tarefa;
    }


    public listarTarefas(): void {
        console.log("Lista deTarefas");
        this.tarefas.forEach(tarefa => {
            const status = tarefa.concluida? "[x]" : "[ ]";
            console.log(`${status} ${tarefa.id}: ${tarefa.descricao}`);
        })
        console.log("_________________\n");
    }

    public marcarTarefaComoConcluida( id: number) {
        const tarefa = this.encontrarTarefaPorId(id);
        if (tarefa) {
            tarefa.marcarComoConcluida();
            console.log(`Tarefa "${tarefa.descricao}" marcada como concluída.`);
        } else {
            console.log(`Tarefa com ID ${id} não encontrada.`);
        }

    }

    private encontrarTarefaPorId(id: number) {
        return this.tarefas.find(tarefa => tarefa.id == id);
    }

}