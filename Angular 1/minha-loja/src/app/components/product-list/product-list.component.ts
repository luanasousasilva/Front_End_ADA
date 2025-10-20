import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,             // ✅ necessário
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  selectProduct(product: any): void {
    this.selectedProduct = product;
  }

  // ✅ trackBy function
  trackByProductId(index: number, product: any): any {
    return product.id; // ou outro identificador único
  }
}
