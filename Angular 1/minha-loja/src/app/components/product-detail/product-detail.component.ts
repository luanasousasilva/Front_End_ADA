import { Component, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnSalePipe} from "../../pipes/on-sale.pipe";


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnChanges, OnDestroy {
  @Input() product: any;
  discountedPrice: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      console.log("Produto mudou!", changes['product']);
      if (this.product.onSale && this.product.discount > 0 ) {
        this.discountedPrice = this.product.price * (1 - this.product.discount);
      } else {
        this.discountedPrice = 0;
      }
    }
  }

  ngOnDestroy(): void {
    console.log('Componente de detalhe destruído! Limpando...');
  }
}
