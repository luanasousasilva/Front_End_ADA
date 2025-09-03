import {ListaDeTarefas} from "./ListaDeTarefas";

const  minhaLista = new ListaDeTarefas();
minhaLista.adicionarTarefa("Estudar programação ");
minhaLista.adicionarTarefa("Beber agua ");
minhaLista.adicionarTarefa("Estudar ingles ");
minhaLista.adicionarTarefa("Ir na academia ");
minhaLista.adicionarTarefa("Dar banho no toto");

const datalimite = new Date();
datalimite.setFullYear(datalimite.getDate()+7);
minhaLista.adicionarComDataLimite("entregar relatorio", datalimite)

minhaLista.listarTarefas();

minhaLista.marcarTarefaComoConcluida(2)

minhaLista.removerTarefa(5)

minhaLista.listarTarefas();

