import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translation {
  [key: string]: {
    [key: string]: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<'pt' | 'en'>('pt');
  public currentLang$ = this.currentLang.asObservable();

  private translations: Translation = {
    pt: {
      // Header
      'header.title': '🛍️ Lojinha Online',
      'header.cart': 'Ver Carrinho',

      // Login
      'login.title': '🔐 Entrar na Sua Conta',
      'login.email': 'E-mail',
      'login.password': 'Senha',
      'login.submit': 'Entrar',
      'login.register': 'Criar Nova Conta',
      'login.noAccount': 'Não tem uma conta?',

      // Register
      'register.title': '📝 Criar Nova Conta',
      'register.name': 'Nome Completo',
      'register.confirmPassword': 'Confirmar Senha',
      'register.submit': 'Cadastrar',
      'register.haveAccount': 'Já tem uma conta?',

      // Products
      'products.title': '🎉 Nossos Produtos',
      'products.subtitle': 'Descubra produtos incríveis com os melhores preços do mercado',
      'products.seeAll': 'Ver Todos os Produtos',
      'products.contact': 'Fale Conosco',
      'products.available': 'Produtos Disponíveis',
      'products.mix': 'Misturar',
      'products.noProducts': 'Nenhum produto encontrado',
      'products.reload': 'Recarregar Produtos',
      'products.loadMore': 'Carregar Mais Produtos',

      // Cart
      'cart.title': '🛒 Seu Carrinho',
      'cart.items': 'itens',
      'cart.subtotal': 'Subtotal:',
      'cart.shipping': 'Frete:',
      'cart.free': 'Grátis',
      'cart.total': 'Total:',
      'cart.checkout': '🚀 Finalizar Compra',
      'cart.clear': '🗑️ Limpar Carrinho',
      'cart.empty': 'Seu carrinho está vazio',
      'cart.continue': '🛍️ Continuar Comprando',

      // Product Detail
      'product.addToCart': '🛒 Adicionar ao Carrinho',
      'product.goToCart': '🛒 Ir para Carrinho',
      'product.back': '← Voltar',
      'product.inStock': 'Disponível em estoque',
      'product.outOfStock': 'Produto Indisponível',

      // Contact
      'contact.title': '📞 Fale Conosco',
      'contact.subtitle': 'Tem alguma dúvida? Estamos aqui para ajudar!',
      'contact.name': 'Nome Completo *',
      'contact.phone': 'Telefone *',
      'contact.subject': 'Assunto *',
      'contact.message': 'Mensagem *',
      'contact.send': '📨 Enviar Mensagem',
      'contact.backToStore': '← Voltar à Loja',

      // Checkout
      'checkout.title': '💳 Finalizar Compra',
      'checkout.subtitle': 'Preencha seus dados para concluir o pedido',
      'checkout.personalData': '📋 Dados Pessoais',
      'checkout.cardData': '💳 Dados do Cartão',
      'checkout.orderSummary': '📦 Resumo do Pedido',
      'checkout.completeOrder': '✅ Finalizar Pedido',
      'checkout.backToCart': '← Voltar ao Carrinho',

      // Admin
      'admin.users': '👥 Gerenciar Usuários',
      'admin.products': '📦 Gerenciar Produtos',
      'admin.addUser': '➕ Adicionar Usuário',
      'admin.addProduct': '➕ Adicionar Produto',
      'admin.delete': '🗑️ Excluir',
      'admin.edit': '✏️ Editar',
      'admin.confirmDelete': 'Tem certeza que deseja excluir este item?'
    },
    en: {
      // Header
      'header.title': '🛍️ Online Store',
      'header.cart': 'View Cart',

      // Login
      'login.title': '🔐 Login to Your Account',
      'login.email': 'Email',
      'login.password': 'Password',
      'login.submit': 'Login',
      'login.register': 'Create New Account',
      'login.noAccount': 'Don\'t have an account?',

      // Register
      'register.title': '📝 Create New Account',
      'register.name': 'Full Name',
      'register.confirmPassword': 'Confirm Password',
      'register.submit': 'Register',
      'register.haveAccount': 'Already have an account?',

      // Products
      'products.title': '🎉 Our Products',
      'products.subtitle': 'Discover amazing products with the best market prices',
      'products.seeAll': 'See All Products',
      'products.contact': 'Contact Us',
      'products.available': 'Available Products',
      'products.mix': 'Shuffle',
      'products.noProducts': 'No products found',
      'products.reload': 'Reload Products',
      'products.loadMore': 'Load More Products',

      // Cart
      'cart.title': '🛒 Your Cart',
      'cart.items': 'items',
      'cart.subtotal': 'Subtotal:',
      'cart.shipping': 'Shipping:',
      'cart.free': 'Free',
      'cart.total': 'Total:',
      'cart.checkout': '🚀 Checkout',
      'cart.clear': '🗑️ Clear Cart',
      'cart.empty': 'Your cart is empty',
      'cart.continue': '🛍️ Continue Shopping',

      // Product Detail
      'product.addToCart': '🛒 Add to Cart',
      'product.goToCart': '🛒 Go to Cart',
      'product.back': '← Back',
      'product.inStock': 'In stock',
      'product.outOfStock': 'Out of stock',

      // Contact
      'contact.title': '📞 Contact Us',
      'contact.subtitle': 'Have any questions? We\'re here to help!',
      'contact.name': 'Full Name *',
      'contact.phone': 'Phone *',
      'contact.subject': 'Subject *',
      'contact.message': 'Message *',
      'contact.send': '📨 Send Message',
      'contact.backToStore': '← Back to Store',

      // Checkout
      'checkout.title': '💳 Checkout',
      'checkout.subtitle': 'Fill in your details to complete the order',
      'checkout.personalData': '📋 Personal Data',
      'checkout.cardData': '💳 Card Data',
      'checkout.orderSummary': '📦 Order Summary',
      'checkout.completeOrder': '✅ Complete Order',
      'checkout.backToCart': '← Back to Cart',

      // Admin
      'admin.users': '👥 Manage Users',
      'admin.products': '📦 Manage Products',
      'admin.addUser': '➕ Add User',
      'admin.addProduct': '➕ Add Product',
      'admin.delete': '🗑️ Delete',
      'admin.edit': '✏️ Edit',
      'admin.confirmDelete': 'Are you sure you want to delete this item?'
    }
  };

  setLanguage(lang: 'pt' | 'en'): void {
    this.currentLang.next(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  getCurrentLang(): 'pt' | 'en' {
    return this.currentLang.value;
  }

  translate(key: string): string {
    const lang = this.currentLang.value;
    return this.translations[lang]?.[key] || key;
  }

  initializeLanguage(): void {
    const storedLang = localStorage.getItem('preferredLanguage') as 'pt' | 'en';
    if (storedLang) {
      this.currentLang.next(storedLang);
    }
  }
}
