import { Component, Input } from '@angular/core';
import { Cart_Item } from '../../../../classes/cart_item';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-minicart-item',
  templateUrl: './minicart-item.component.html',
  styleUrl: './minicart-item.component.css'
})
export class MinicartItemComponent {

  /* --- @Inputs --- */
  @Input() item!: Cart_Item; // from <app-minicart-items> : item to draw

  /* --- Init --- */
  constructor(
    private cart: CartService // Service for cart related methods (e.g.: get/add/remove)
  ) {

  }

  remove_from_cart(item: Cart_Item) {
    this.cart.remove_from_cart(item);
  }

}
