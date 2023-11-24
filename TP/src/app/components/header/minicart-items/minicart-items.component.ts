import { Component, Input } from '@angular/core';
import { Cart_Item } from '../../../classes/cart_item';

@Component({
  selector: 'app-minicart-items',
  templateUrl: './minicart-items.component.html',
  styleUrl: './minicart-items.component.css'
})
export class MinicartItemsComponent {

  /* --- @Inputs --- */
  @Input() items: Cart_Item[] = []; // from <app-minicart> : items in cart and assigned to currently selected shop

}
