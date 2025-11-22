import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AdminService} from "../../services/admin.service";
import { Product } from '../../../types';
import { ConfirmationModalComponent } from "../../../confirmation-modal.component";
import { TruncatePipe} from "../../pipes/truncate.pipe";


@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, ConfirmationModalComponent, TruncatePipe],
  templateUrl: './admin-products.component.html',

  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit {
  private adminService = inject(AdminService);
  private router = inject(Router);

  products: Product[] = [];
  showDeleteModal = false;
  productToDelete: number | null = null;
  isLoading = true;

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.adminService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar produtos:', error);
        this.isLoading = false;
      }
    });
  }

  addProduct(): void {
    this.router.navigate(['/admin/products/new']);
  }

  editProduct(id: number): void {
    this.router.navigate(['/admin/products/edit', id]);
  }

  deleteProduct(id: number): void {
    this.productToDelete = id;
    this.showDeleteModal = true;
  }

  onModalConfirmed(event: boolean): void {
    if (event && this.productToDelete) {
      this.adminService.deleteProduct(this.productToDelete).subscribe({
        next: () => {
          this.products = this.products.filter(p => p.id !== this.productToDelete);
          this.showDeleteModal = false;
          this.productToDelete = null;
        },
        error: (error) => {
          console.error('Erro ao deletar produto:', error);
          this.showDeleteModal = false;
          this.productToDelete = null;
        }
      });
    } else {
      this.showDeleteModal = false;
      this.productToDelete = null;
    }
  }
}
