import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { RouterLink } from "@angular/router";
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { Product } from "../../../types";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { Subscription } from 'rxjs';
import { AuthService } from "../../services/auth.service";
import { ProductManagementService } from "../../services/product-management.service";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CategoryListComponent,
    ProductCardComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  apiProducts: Product[] = [];
  customProducts: Product[] = [];
  isAdmin = false;
  showOnlyMyProducts = false;
  private productsSubscription!: Subscription;

  private productService = inject(ProductService);
  private authService = inject(AuthService);
  private productManagementService = inject(ProductManagementService);

  ngOnInit(): void {
    this.loadApiProducts();
    this.isAdmin = this.authService.isAdmin();

    this.productsSubscription = this.productManagementService.products$.subscribe(products => {
      this.customProducts = products.filter(product =>
        this.productManagementService.isCustomProduct(product)
      );
      this.updateProductsList();
    });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  loadApiProducts() {
    this.productService.getProducts().subscribe(data => {
      this.apiProducts = data.map(product => ({
        ...product,
        createdAt: '2024-01-01',
        stock: Math.floor(Math.random() * 100) + 1,
        isCustom: false,
        source: 'api'
      }));
      this.updateProductsList();
    });
  }

  updateProductsList(): void {
    if (this.showOnlyMyProducts) {
      const currentUser = this.authService.getCurrentUser();
      this.products = this.customProducts.filter(product =>
        product.createdBy === currentUser?.id
      );
    } else {
      // Mostra todos os produtos (API + customizados)
      this.products = [...this.apiProducts, ...this.customProducts];
    }
  }

  toggleMyProducts(): void {
    this.showOnlyMyProducts = !this.showOnlyMyProducts;
    this.updateProductsList();
  }

  onCategorySelected(category: string){
    this.productService.getProductsByCategory(category).subscribe(data => {
      const enhancedProducts = data.map(product => ({
        ...product,
        createdAt: '2024-01-01',
        stock: Math.floor(Math.random() * 100) + 1,
        isCustom: false,
        source: 'api'
      }));
      this.apiProducts = enhancedProducts;
      this.updateProductsList();
    });
  }
}
