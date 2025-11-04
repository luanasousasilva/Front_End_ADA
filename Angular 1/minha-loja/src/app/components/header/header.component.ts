import { Component } from '@angular/core';
import { CartStatusComponent } from '../cart-status/cart-status.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [CartStatusComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
