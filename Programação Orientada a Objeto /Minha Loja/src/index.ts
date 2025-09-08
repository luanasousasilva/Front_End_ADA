import { Cliente } from './Cliente';
import { Pedido } from './Pedido';
import { ItemPedido } from './ItemPedido';

console.log("--- Clientes Cadastrados ---");

const cliente1 = new Cliente(1, "João Silva", "joao@email.com");
const cliente2 = new Cliente(2, "Maria Souza", "maria@email.com");

const pedido1 = new Pedido(101, new Date(), cliente1);
pedido1.adicionarItem(new ItemPedido("Camiseta", 29.90, 2));
pedido1.adicionarItem(new ItemPedido("Calça", 59.90, 1));

const pedido2 = new Pedido(102, new Date(), cliente2);
pedido2.adicionarItem(new ItemPedido("Tênis", 99.90, 1));

// associar pedidos aos clientes
cliente1.adicionarPedido(pedido1);
cliente2.adicionarPedido(pedido2);

console.log("--- Resumo dos Pedidos ---");
console.log(pedido1.resumo());
console.log(pedido2.resumo());

console.log("--- Total gasto por cliente ---");
console.log(`${cliente1.nome} gastou R$ ${cliente1.calcularTotalGasto().toFixed(2)}`);
console.log(`${cliente2.nome} gastou R$ ${cliente2.calcularTotalGasto().toFixed(2)}`);


pedido1.pagar();
pedido1.enviar();
pedido1.entregar();

console.log("--- Resumo Pedido 1 ---");
console.log(pedido1.resumo());

console.log("Status final do pedido1:", pedido1.status);

console.log(`Total gasto por ${cliente1.nome}: R$ ${cliente1.calcularTotalGasto()}`);

// Testando ciclo de vida do pedido
console.log(`Status inicial: ${pedido1.status}`);
pedido1.pagar();
console.log(`Status após pagar: ${pedido1.status}`);
pedido1.enviar();
console.log(`Status após enviar: ${pedido1.status}`);

