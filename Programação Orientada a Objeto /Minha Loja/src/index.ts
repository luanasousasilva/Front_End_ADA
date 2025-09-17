import { Pedido } from './Pedido';
import { ItemPedido } from './ItemPedido';
import { ProdutoFisico } from "./ProdutoFisico";
import { ProdutoDigital } from "./ProdutoDigital";
import {ClientePessoaFisica} from "./ClientePessoaFisica";
import {ClientePessoaJuridica} from "./ClientePessoaJuridica";

console.log('--- Bem-vindo à Minha Loja! ---');

// Criando instâncias de cliente pessoa física e cliente pessoa jurídica
const clientePF = new ClientePessoaFisica(1, 'joao@email.com', 'João da Silva', '123.456.789-09');
const clientePJ = new ClientePessoaJuridica(2, 'contato@empresa.com.br', 'Empresa XPTO', '12.345.678/0001-99');

console.log('\n--- Clientes Cadastrados ---');
console.log(clientePF);
console.log(clientePJ);

// Criando instâncias de Produtos
const livro = new ProdutoFisico(1, "O Senhor dos Anéis", 50, "Livro de Fantasia", 500);
const ebook = new ProdutoDigital(2, "Game of Thrones", 30, "E-book de Fantasia", "http://link.com");
const placaDeVideo = new ProdutoFisico(3, "Placa de Vídeo", 3500, "Placa de vídeo para jogos", 1000);
const mouseGamer = new ProdutoFisico(4, "Mouse Gamer", 150, "Mouse para jogos", 200);

// Criando instâncias dos itens de pedido
const item1 = new ItemPedido(placaDeVideo, 1);
const item2 = new ItemPedido(mouseGamer, 2);
const item3 = new ItemPedido(ebook, 1);
const item4 = new ItemPedido(livro, 1);

// Criando instâncias dos pedidos
const pedido1 = new Pedido(101, new Date(), clientePF);
const pedido2 = new Pedido(102, new Date(), clientePJ);

// Adicionando itens aos pedidos
pedido1.adicionarItem(item1);
pedido1.adicionarItem(item2);
pedido2.adicionarItem(item3);
pedido2.adicionarItem(item4);

// Associando pedidos aos clientes
clientePF.adicionarPedido(pedido1);
clientePJ.adicionarPedido(pedido2);

console.log("\n--- Testando Acesso aos atributos ---");
console.log(`E-mail do cliente PF: ${clientePF.email}`); // Atributo da classe mãe
console.log(`CPF do cliente PF: ${clientePF.cpf}`); // Atributo da classe filha

console.log(`E-mail do cliente PJ: ${clientePJ.email}`);
console.log(`CNPJ do cliente PJ: ${clientePJ.cnpj}`);

console.log("\n--- Pedidos Realizados ---");
console.log(`Total gasto por ${clientePF.nome}: R$ ${clientePF.calcularTotalGasto().toFixed(2)}`);
console.log(`Total gasto por ${clientePJ.razaoSocial}: R$ ${clientePJ.calcularTotalGasto().toFixed(2)}`);


console.log('\n--- Sistema finalizado ---');