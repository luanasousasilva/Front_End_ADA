const catalogoProduto = document.querySelector('#catalogo');
const destaqueProduto = document.getElementById('destaque');
let listaDeProdutos = [];

const carrinhoContainer = document.getElementById('carrinho');
const totalItensEl = document.getElementById('total-itens');
const totalValorEl = document.getElementById('total-valor');

(function createProductDetailModal() {
    if (document.getElementById('productDetailOverlay')) return;

    const style = document.createElement('style');
    style.textContent = `
    /* Estilos do modal (igual ao seu original) */
    #productDetailOverlay { position: fixed; inset:0; display:none; align-items:center; justify-content:center; background: rgba(12,12,18,0.55); z-index:2200; padding:20px; transition:opacity .18s ease; }
    #productDetailOverlay.open { display:flex; opacity:1; }
    #productDetailModal { background:#fff; border-radius:16px; max-width:780px; width:100%; box-shadow:0 12px 40px rgba(0,0,0,0.25); overflow:hidden; position:relative; animation:modalPop .22s ease; }
    @keyframes modalPop { from { transform: translateY(10px) scale(.97); opacity:0 } to { transform: translateY(0) scale(1); opacity:1 } }
    #productDetailModal .pd-content { display:flex; gap:26px; padding:28px; align-items:flex-start; flex-wrap:wrap; }
    #productDetailModal .pd-content img { width:260px; height:260px; object-fit:contain; border-radius:10px; background:#fafafa; padding:10px; box-shadow:0 2px 10px rgba(0,0,0,0.08); }
    #productDetailModal .pd-meta { flex:1 1 300px; display:flex; flex-direction:column; }
    #productDetailModal h3 { margin:0 0 12px; font-size:1.25rem; font-weight:600; color:#1e1e1e; }
    #productDetailModal .pd-category { font-size:.9rem; color:#7a7a7a; margin-bottom:10px; }
    #productDetailModal .pd-price { font-weight:700; color:#7e22ce; font-size:1.25rem; margin-bottom:14px; }
    #productDetailModal .pd-desc { color:#444; font-size:.95rem; line-height:1.6; margin-top:12px; text-align:justify; }
    #productDetailModal .pd-actions { margin-top:16px; display:flex; gap:10px; align-items:center; }
    #productDetailModal button.pd-close { position:absolute; right:12px; top:10px; background:transparent; border:none; font-size:22px; color:#666; cursor:pointer; padding:6px; border-radius:6px; transition:0.2s; }
    #productDetailModal button.pd-close:hover { background: rgba(0,0,0,0.07); color:#111; }
    #productDetailModal button.pd-add { background:linear-gradient(135deg,#a855f7,#9333ea); color:#fff; border:none; padding:10px 18px; border-radius:999px; cursor:pointer; font-weight:600; font-size:.95rem; transition:all 0.2s ease; box-shadow:0 6px 18px rgba(168,85,247,0.2); }
    #productDetailModal button.pd-add:hover { transform:translateY(-2px); box-shadow:0 8px 22px rgba(168,85,247,0.25); }
    @media (max-width: 720px) { #productDetailModal .pd-content { flex-direction:column; align-items:center; padding:20px; } #productDetailModal .pd-content img { width:80%; height:auto; max-height:320px; } #productDetailModal .pd-meta { align-items:center; text-align:center; } }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = 'productDetailOverlay';

    const modal = document.createElement('div');
    modal.id = 'productDetailModal';
    modal.innerHTML = `
      <button class="pd-close" aria-label="Fechar">&times;</button>
      <div class="pd-content">
        <img id="pd-image" src="" alt="produto">
        <div class="pd-meta">
          <h3 id="pd-title">Título do produto</h3>
          <div class="pd-category" id="pd-category"></div>
          <div class="pd-price" id="pd-price"></div>
          <div class="pd-actions">
            <button class="pd-add" id="pd-add">Adicionar ao carrinho</button>
          </div>
          <p class="pd-desc" id="pd-desc"></p>
        </div>
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (ev) => {
        if (ev.target === overlay) hideProductModal();
    });
    modal.querySelector('.pd-close').addEventListener('click', hideProductModal);
    document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape') hideProductModal();
    });

    function hideProductModal() {
        overlay.classList.remove('open');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }

    window._showProductModal = function (produto) {
        modal.setAttribute('data-product-id', produto.id);
        modal.querySelector('#pd-image').src = produto.image || 'https://picsum.photos/400/300';
        modal.querySelector('#pd-image').alt = produto.title || 'Produto';
        modal.querySelector('#pd-title').textContent = produto.title || 'Produto sem título';
        modal.querySelector('#pd-price').textContent = (Number(produto.price) || 0).toLocaleString('pt-BR', {
            style: 'currency', currency: 'BRL'
        });
        modal.querySelector('#pd-desc').textContent = produto.description || '';
        modal.querySelector('#pd-category').textContent = produto.category || '';
        overlay.classList.add('open');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    };

    modal.querySelector('#pd-add').addEventListener('click', () => {
        const id = modal.getAttribute('data-product-id');
        const produto = listaDeProdutos.find(p => String(p.id) === String(id));
        if (!produto) return;

        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (!cart.some(item => item.id === produto.id)) {
            cart.push({
                id: produto.id,
                title: produto.title,
                price: produto.price,
                image: produto.image,
                quantity: 1
            });
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        renderizarCarrinho();

        modal.querySelector('#pd-add').textContent = 'Adicionado ✓';
        setTimeout(() => {
            modal.querySelector('#pd-add').textContent = 'Adicionar ao carrinho';
            hideProductModal();
        }, 900);
    });
})();

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.btn-entrar');
    const username = localStorage.getItem('username');
    if (!loginBtn) return;

    if (username && username.toLowerCase() === 'johnd') {
        loginBtn.textContent = 'Admin';
        loginBtn.classList.remove('btn-primary');
        loginBtn.classList.add('btn-warning');
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'admin.html';
        });
    } else if (username) {
        loginBtn.textContent = 'Sair';
        loginBtn.classList.remove('btn-primary');
        loginBtn.classList.add('btn-secondary');
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('username');
            window.location.reload();
        });
    } else {
        loginBtn.textContent = 'Entrar';
        loginBtn.classList.remove('btn-secondary', 'btn-warning');
        loginBtn.classList.add('btn-primary');
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }
});

function criarCardProduto(produto) {
    const card = document.createElement('article');
    card.className = 'card-produto col-sm-12 col-md-6 col-lg-3 p-3 border rounded shadow-sm text-center';

    const imagem = document.createElement('img');
    imagem.src = produto.image || 'https://picsum.photos/200/300';
    imagem.alt = produto.title;
    imagem.classList.add('img-fluid', 'mb-2', 'rounded');

    const titulo = document.createElement('h5');
    titulo.textContent = produto.title;

    const preco = document.createElement('p');
    preco.textContent = `R$ ${Number(produto.price).toFixed(2)}`;

    const botaoDetalhes = document.createElement('button');
    botaoDetalhes.classList.add('btn', 'btn-info', 'mt-3');
    botaoDetalhes.textContent = 'Exibir detalhes';
    botaoDetalhes.addEventListener('click', () => {
        buscarDetalhesDoProduto(produto.id);
    });

    card.append(imagem, titulo, preco, botaoDetalhes);
    return card;
}

function renderizarProdutos() {
    catalogoProduto.innerHTML = '';
    listaDeProdutos.forEach(produto => {
        const card = criarCardProduto(produto);
        catalogoProduto.appendChild(card);
    });
}

function salvarProdutosNoStorage() {
    localStorage.setItem('produtos', JSON.stringify(listaDeProdutos));
}

async function carregarProdutos() {
    const produtosSalvos = localStorage.getItem('produtos');
    if (produtosSalvos) {
        listaDeProdutos = JSON.parse(produtosSalvos);
    } else {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
            listaDeProdutos = await response.json();
            salvarProdutosNoStorage();
        } catch (erro) {
            console.error("Erro ao carregar produtos: ", erro);
            catalogoProduto.innerHTML = '<p class="text-danger text-center">Não foi possível carregar os produtos!</p>';
        }
    }

    destaqueProduto.innerHTML = '';
    if (listaDeProdutos.length > 0) {
        const cardDestaque = criarCardProduto(listaDeProdutos[0]);
        destaqueProduto.appendChild(cardDestaque);
    }

    renderizarProdutos();
}

async function buscarDetalhesDoProduto(id) {
    let produto = listaDeProdutos.find(p => String(p.id) === String(id));
    if (!produto) {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
            produto = await response.json();
        } catch (erro) {
            console.error("Erro ao buscar detalhes do produto:", erro);
            alert('Não foi possível carregar os detalhes do produto.');
            return;
        }
    }
    window._showProductModal(produto);
}

function renderizarCarrinho() {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const carrinhoContainer = document.getElementById('carrinho');
    carrinhoContainer.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('div');
        li.className = 'cart-item d-flex justify-content-between align-items-center mb-2';
        li.innerHTML = `
            <span>${item.title} x${item.quantity}</span>
            <span>R$ ${Number(item.price).toFixed(2)}</span>
        `;
        carrinhoContainer.appendChild(li);
    });

    totalItensEl.textContent = cart.length;

    const valorTotal = cart.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);
    totalValorEl.textContent = valorTotal.toFixed(2).replace('.', ',');
}

const carrinhoIcon = document.getElementById('carrinho-icon');
const carrinhoPopup = document.getElementById('carrinho-popup');
const btnFecharCarrinho = document.getElementById('fechar-carrinho');

carrinhoIcon.addEventListener('click', () => {
    carrinhoPopup.style.display = 'block';
});

btnFecharCarrinho.addEventListener('click', () => {
    carrinhoPopup.style.display = 'none';
});

window.addEventListener('load', async () => {
    localStorage.removeItem('cart'); // Limpa o carrinho ao recarregar
    await carregarProdutos();
    renderizarCarrinho();
});
