import { Component } from '@angular/core';
import { CartStatusComponent } from '../cart-status/cart-status.component';

@Component({
  selector: 'app-header',
  imports: [CartStatusComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
