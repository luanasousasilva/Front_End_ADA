import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../../types';
import { TruncatePipe } from "../../../truncate.pipe";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, TruncatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() showCategory: boolean = true;

  isHovered = false;

  get isOnSale(): boolean {
    return this.product.price < 50;
  }

  get ratingStars(): number[] {
    const rating = Math.round(this.product.rating?.rate || 0);
    return Array(rating).fill(0);
  }
}
