const username = localStorage.getItem('username');
if (!username) {
    window.location.href = 'login.html';
}

const boasVindas = document.getElementById('welcome-message');
if (boasVindas) {
    boasVindas.innerText = `Olá, ${username}`
}

const botaoLogout = document.getElementById('logout-btn');
if(botaoLogout) {
    botaoLogout.addEventListener('click', () => {
        localStorage.removeItem('username');
        window.location.href = 'index.html';
    });
}

const API_URL = 'https://fakestoreapi.com/products';
const productsTableBody = document.getElementById('products-table-body');
const productForm = document.getElementById('product-form');
const productModalElement = document.getElementById('productModal');
const productModal = new bootstrap.Modal(productModalElement);
const productModalLabel = document.getElementById('productModalLabel');
const deleteConfirmModalElement = document.getElementById('deleteConfirmModal');
const deleteConfirmModal = new bootstrap.Modal(deleteConfirmModalElement);

let products = [];
let currentProductId = null;


async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        products = await response.json();
        renderProducts();
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

function renderProducts() {
    productsTableBody.innerHTML = '';
    products.forEach(product => {
        const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>$${product.price}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="openEditModal(${product.id})">Editar</button>
                    <button class="btn btn-sm btn-danger" onclick="openDeleteModal(${product.id})">Deletar</button>
                </td>
            </tr>
        `;
        productsTableBody.innerHTML += row;
    });
}

function openEditModal(id) {
    currentProductId = id;
    const product = products.find(p => p.id === id);
    productModalLabel.textContent = 'Editar Produto';
    document.getElementById('product-id').value = product.id;
    document.getElementById('product-title').value = product.title;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-image').value = product.image;
    document.getElementById('product-category').value = product.category;
    productModal.show();
}


function openDeleteModal(id) {
    currentProductId = id;
    deleteConfirmModal.show();
}

document.getElementById('add-product-btn').addEventListener('click', () => {
    currentProductId = null;
    productModalLabel.textContent = 'Adicionar Produto';
    productForm.reset();
    document.getElementById('product-id').value = '';
});

productForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = document.getElementById('product-id').value;
    const productData = {
        title: document.getElementById('product-title').value,
        price: parseFloat(document.getElementById('product-price').value),
        description: document.getElementById('product-description').value,
        image: document.getElementById('product-image').value,
        category: document.getElementById('product-category').value
    };

    const method = id ? 'PUT' : 'POST';
    const url = id ? `${API_URL}/${id}` : API_URL;

    try {
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });
        const result = await response.json();
        console.log('Produto salvo:', result);
        if (id) {
            const index = products.findIndex(p => p.id == id);
            products[index] = { ...products[index], ...productData, id: parseInt(id) };
        } else {
            products.push({ ...productData, id: result.id || (products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1) });
        }
        renderProducts();
        productModal.hide();

    } catch (error) {
        console.error('Erro ao salvar produto:', error);
    }
});

document.getElementById('confirm-delete-btn').addEventListener('click', async () => {
    try {
        await fetch(`${API_URL}/${currentProductId}`, { method: 'DELETE' });

        products = products.filter(p => p.id !== currentProductId);
        renderProducts();
        deleteConfirmModal.hide();
        currentProductId = null;
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
    }
});
fetchProducts();
