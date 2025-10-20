import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availability'
})
export class AvailabilityPipe implements PipeTransform {
  transform(value: any): string {
    return value ? 'Disponível' : 'Indisponível';
  }

}
