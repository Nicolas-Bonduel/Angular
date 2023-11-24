import { Pipe, PipeTransform } from '@angular/core';
import { Cart_Item } from '../classes/cart_item';

@Pipe({
  name: 'cartItemsTotal'
})
export class CartItemsTotalPipe implements PipeTransform {

  transform(cart_items: Cart_Item[]): number {
    return cart_items.reduce( (sum, i) => sum + (i.quantity * i.unit_price), 0 );
  }

}
