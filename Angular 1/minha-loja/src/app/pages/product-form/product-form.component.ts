import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from "../../services/admin.service";

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private adminService = inject(AdminService);
  private route = inject(ActivatedRoute);

  // Tornar o router público para acesso no template
  constructor(public router: Router) {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0.01)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  productForm: FormGroup;
  isEditMode = false;
  productId: number | null = null;
  isLoading = false;
  categories: string[] = [];

  ngOnInit(): void {
    this.loadCategories();

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.productId = +params['id'];
        this.loadProductData();
      }
    });
  }

  loadCategories(): void {
    this.adminService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Erro ao carregar categorias:', error);
        this.categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
      }
    });
  }

  loadProductData(): void {
    if (this.productId) {
      this.isLoading = true;
      this.adminService.getProductById(this.productId).subscribe({
        next: (product) => {
          this.productForm.patchValue({
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image
          });
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Erro ao carregar produto:', error);
          this.isLoading = false;
        }
      });
    }
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.style.display = 'none';
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.isLoading = true;
      const productData = this.productForm.value;

      if (this.isEditMode && this.productId) {
        this.adminService.updateProduct(this.productId, productData).subscribe({
          next: () => {
            this.isLoading = false;
            this.router.navigate(['/admin/products']);
          },
          error: (error) => {
            console.error('Erro ao atualizar produto:', error);
            this.isLoading = false;
          }
        });
      } else {
        this.adminService.createProduct(productData).subscribe({
          next: () => {
            this.isLoading = false;
            this.router.navigate(['/admin/products']);
          },
          error: (error) => {
            console.error('Erro ao criar produto:', error);
            this.isLoading = false;
          }
        });
      }
    }
  }
}
