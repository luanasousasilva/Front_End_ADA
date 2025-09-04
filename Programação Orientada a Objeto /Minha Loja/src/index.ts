import { Cliente} from "./Cliente";
import { Pedido} from "./Pedido";

console.log("--- Clientes Cadastrados ---");

const cliente1 = new Cliente(1,"João Silva", "joao@email.com");
const cliente2 = new Cliente(2,"Maria Souza", "maria@email.com");

console.log("--- Clientes Cadastrados ---");
console.log(cliente1);
console.log("Email de cliente 1:", cliente1.email);
console.log(cliente2);
console.log("Email de cliente 2:", cliente2.email);

const pedido1 = new Pedido(101, new Date());
const pedido2 = new Pedido(102, new Date());

console.log("--- Pedidos Criados ---");
console.log("Total do pedido 1: R$", pedido1.total.toFixed(2));
console.log("Total do pedido 2: R$", pedido2.total.toFixed(2));

console.log("--- Sistema Finalizado ---");