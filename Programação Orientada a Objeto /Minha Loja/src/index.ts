import { Cliente } from './Cliente';
import { Pedido } from './Pedido';
import { ItemPedido } from './ItemPedido';

console.log('--- Bem-vindo à Minha Loja! ---');

// Criando instâncias dos clientes
const cliente1 = new Cliente(1, 'João da Silva', 'joao@email.com');
const cliente2 = new Cliente(2, 'Maria Souza', 'maria@email.com');

console.log('\n--- Clientes Cadastrados ---');
console.log(cliente1);
console.log(`Email do cliente 2: ${cliente2.email}`);

// Criando instâncias dos itens de pedido
const item1 = new ItemPedido("Placa de vídeo", 1500.00, 1);
const item2 = new ItemPedido("Monitor 4K", 1200.00, 2);
const item3 = new ItemPedido("Teclado mecânico", 300.00, 1);
const item4 = new ItemPedido("Mouse gamer", 150.00, 1);

// Criando instâncias dos pedidos
const pedido1 = new Pedido(101, new Date(), cliente1);
const pedido2 = new Pedido(102, new Date(), cliente2);

// Adicionando itens aos pedidos
pedido1.adicionarItem(item1);
pedido1.adicionarItem(item2);
pedido2.adicionarItem(item3);
pedido2.adicionarItem(item4);

// Associando pedidos aos clientes
cliente1.adicionarPedido(pedido1);
cliente2.adicionarPedido(pedido2);

// Calculando o total dos pedidos
console.log('\n--- Pedidos Criados ---');
console.log(`Total do pedido 1: R$ ${pedido1.total.toFixed(2)}`);
console.log(`Total do pedido 2: R$ ${pedido2.total.toFixed(2)}`);

// Verificando conexões entre clientes e pedidos
console.log('\n--- Verificando Conexões ---');
console.log('Cliente do pedido 1:');
console.log(cliente1);
console.log('\nResumo do pedido 1:');
console.log(pedido1.obterResumo());

console.log('\n--- Testando validações do ItemPedido ---');
console.log('\nTentando criar item com valor negativo...');
const itemInvalido1 = new ItemPedido("Produto Ruim", -100, 1);
console.log(itemInvalido1);

console.log('\nTentando atribuir quantidade negativa a um item existente');
console.log(`Quantidade original do item2: ${item2.quantidade}`);
item2.quantidade = -5; // Deve mostrar mensagem de erro
console.log(`Quantidade do item2 após tentativa de alteração: ${item2.quantidade}`);

console.log('\n--- Testando método de total gasto ---');
console.log(`\nTotal gasto por ${cliente1.nome}: R$ ${cliente1.calcularTotalGasto().toFixed(2)}`);

console.log('\n--- Testando fluxo de entrega ---');
console.log(`\n Status inicial do pedido 1: ${pedido1.status}`);
pedido1.pagar();
console.log(`\n Status do pedido 1 depois de pagar: ${pedido1.status}`);
pedido1.enviar();
console.log(`\n Status do pedido 1 depois de enviar: ${pedido1.status}`);
pedido1.entregar();
console.log(`\n Status do pedido 1 depois de entregar: ${pedido1.status}`);

console.log('\n--- Testando validações dos clientes ---');
console.log('Tentando criar um cliente com nome inválido...');
const clienteInvalido1 = new Cliente(3, "A", "ana@email.com");

console.log('Tentando criar um cliente com email inválido...');
const clienteInvalido2 = new Cliente(4, "Beatriz", "beatrizemail.com");
console.log(clienteInvalido2);
console.log('Tentando alterar o nome do cliente para um nome inválido');
const clienteValido = new Cliente(5, "Eduardo", "edu@email.com");
console.log(`Nome original do cliente: ${clienteValido.nome}`);

clienteValido.nome = "E";
console.log(`Nome após a tentativa de alteração: ${clienteValido.nome}`);

console.log("\n--- Testando Serialização ---");
const jsonPedido = JSON.stringify(pedido1, null, 2);
console.log(jsonPedido);

console.log("\n--- Testando Desserialização ---");
const dadosDoServidor = JSON.parse(jsonPedido);
const pedidoRecriado = Pedido.fromData(dadosDoServidor, cliente1);
console.log(pedidoRecriado);
console.log(`Total do pedido recriado: R$ ${pedidoRecriado.total.toFixed(2)}`);

console.log("\n--- Testando Serialização/Desserialização do cliente ---");
const clienteOriginal = new Cliente(10, "Joana Silva", "joana@gmail.com");
const jsonCliente = JSON.stringify(clienteOriginal.toJSON(), null, 2);
console.log("Cliente Serializado:");
console.log(jsonCliente);

const clienteRecriado = Cliente.fromJSON(jsonCliente);
console.log("Cliente recriado a partir do Json:");
console.log(clienteRecriado);

console.log("\n--- Testando Atualização Parcial e Validações ---");
const patchData = {email: "novoemail.invalido", nome: "J"};
console.log(`\n Aplicando atualizações: ${JSON.stringify(patchData)}`);
clienteRecriado.aplicarAtualizacoes(patchData);
console.log("\n Cliente após tentativa de atualização com dados inválidos:");
console.log(clienteRecriado);


console.log('\n--- Sistema finalizado ---');