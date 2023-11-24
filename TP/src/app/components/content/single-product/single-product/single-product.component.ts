import { Component, Input } from '@angular/core';
import { Product } from '../../../../classes/product';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {

  /* --- @Inputs --- */
  @Input() product!: Product; // from <app-product-navigation>: product to display in card

  constructor(
    private cart: CartService // Service for cart related methods (e.g.: get/add/remove)
  ) {
    
  }

  /**
   * Adds given product to cart
   * 
   * @param product - product to add
   */
  add_to_cart(product: Product) {
    this.cart.add_to_cart(product);
  }

}
