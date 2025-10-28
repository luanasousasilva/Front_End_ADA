import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { CategoryListComponent } from "../../components/category-list/category-list.component";
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, CategoryListComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  onCategorySelected(category: string){
    this.productService.getProductsByCategory(category).subscribe(data => {
      this.products = data;
    })
  }
}
