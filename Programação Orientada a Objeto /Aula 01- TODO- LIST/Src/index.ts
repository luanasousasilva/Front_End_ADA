import {ListaDeTarefas} from "./ListaDeTarefas";

const  minhaLista = new ListaDeTarefas();
minhaLista.adicionarTarefa(" estudar ");
minhaLista.adicionarTarefa(" deTarefa");
minhaLista.adicionarTarefa("khbkjhbkj");

minhaLista.listarTarefas();
minhaLista.marcarTarefaComoConcluida(2)
minhaLista.listarTarefas();