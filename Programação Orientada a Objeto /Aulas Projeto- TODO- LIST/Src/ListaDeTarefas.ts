import { Tarefa } from "./Tarefa";
import { TarefaComDataLimite } from "./TarefaComDataLimite";

export class ListaDeTarefas {
    private tarefas: Tarefa[] = [];
    private proximoId: number = 1;

    public adicionarTarefa(descricao: string): Tarefa {
        const tarefa = new Tarefa(this.proximoId++, descricao);
        this.tarefas.push(tarefa);
        return tarefa;
    }

    public adicionarComDataLimite(descricao: string, dataLimite: Date): TarefaComDataLimite {
        const novaTarefa = new TarefaComDataLimite(this.proximoId++, descricao, dataLimite);
        this.tarefas.push(novaTarefa);
        console.log(`Tarefa com data limite "${descricao}" adicionada com sucesso (prazo: ${this.formatarData(dataLimite)}).`);
        return novaTarefa;
    }

    private formatarData(data: Date): string {
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    public listarTarefas(): void {
        console.log("______Lista de Tarefas______");
        this.tarefas.forEach(tarefa => {
            const status = tarefa.concluida ? "[x]" : "[ ]";
            if (tarefa instanceof TarefaComDataLimite) {
                console.log(`${status} ${tarefa.id}: ${tarefa.getDescricaoCompleta()}`);
            } else {
                console.log(`${status} ${tarefa.id}: ${tarefa.descricao}`);
            }
        });
        console.log("_________________\n");
    }

    public marcarTarefaComoConcluida(id: number) {
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

    public removerTarefa(id: number): void {
        const tarefaRemovida = this.encontrarTarefaPorId(id);
        if (tarefaRemovida) {
            this.tarefas = this.tarefas.filter(t => t.id !== id);
            console.log(`Tarefa "${tarefaRemovida.descricao}" removida.`);
        } else {
            console.log(`Tarefa com ID ${id} não encontrada.`);
        }
    }
}
