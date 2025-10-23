import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale' // 👈 nome do pipe em minúsculas
})
export class OnSalePipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Em promoção' : 'Preço normal';
  }
}

