import { Produto } from './models/Produto';
import { Cliente } from './models/Cliente';
import { Endereco } from './models/Endereco';
import { CupomPercentual, CupomValorFixo } from './models/Cupom';
import { CartaoCredito, Pix } from './models/Pagamento';

console.log('=== Milha Loja ===');


const p1 = new Produto(1, 'Camiseta', 'Camiseta simples', 50, 10);
const p2 = new Produto(2, 'Caneca', 'Caneca legal', 25, 3);
const p3 = new Produto(3, 'Livro TS', 'Livro básico TS', 80, 1);

console.log('Produtos:');
console.log(p1.toJSON(), p2.toJSON(), p3.toJSON());


const endereco = new Endereco('Rua B', '45', 'Cidade X', 'Estado Y', '11111-111');
const cliente = new Cliente(1, 'Ana', 'ana@example.com', endereco);


console.log('\nAdicionando ao carrinho: Camiseta x2, Caneca x1');
cliente.carrinho.adicionarProduto(p1, 2);
cliente.carrinho.adicionarProduto(p2, 1);

console.log('Carrinho agora:', JSON.stringify(cliente.carrinho.toJSON(), null, 2));

console.log('\nAplicando cupom 10%');
const cupom = new CupomPercentual('PROMO10', 10);
cliente.carrinho.aplicarCupom(cupom);
console.log('Total com cupom:', cliente.carrinho.calcularTotal());

console.log('\nFinalizando compra...');
const pedido = cliente.finalizarCompra(2001);
console.log('Pedido criado:', JSON.stringify(pedido.toJSON(), null, 2));

console.log('\nPagando com cartão...');
const cartao = new CartaoCredito(pedido.total(), 2);
pedido.adicionarPagamento(cartao);
console.log('Pedido após pagamento:', JSON.stringify(pedido.toJSON(), null, 2));

console.log('\n--- Novo cliente com cupom de valor fixo ---');
const cliente2 = new Cliente(2, 'Pedro', 'pedro@example.com');
cliente2.carrinho.adicionarProduto(p3, 1);
const cupom2 = new CupomValorFixo('FIXO20', 20);
cliente2.carrinho.aplicarCupom(cupom2);
console.log('Total cliente2:', cliente2.carrinho.calcularTotal());
const pedido2 = cliente2.finalizarCompra(2002);
console.log('Pedido2:', pedido2.toJSON());
console.log('Pagando com PIX...');
const pix = new Pix(pedido2.total());
pedido2.adicionarPagamento(pix);
console.log('Pedido2 após pagamento:', pedido2.toJSON());