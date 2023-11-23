import { Component, Input } from '@angular/core';
import { Product } from '../../../../classes/product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {

  /* --- @Inputs --- */
  @Input() product!: Product; // from <app-product-navigation>: product to display in card

}
