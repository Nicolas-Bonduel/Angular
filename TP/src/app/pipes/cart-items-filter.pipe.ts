import { Pipe, PipeTransform } from '@angular/core';
import { Cart_Item } from '../classes/cart_item';

@Pipe({
  name: 'cartItemsFilter'
})
export class CartItemsFilterPipe implements PipeTransform {

  /**
   * Filters cart items to remove those that are not assigned to given shop
   * used in <app-minicart>
   * 
   * @param cart_items  - given cart items  (in context: items in cart)
   * @param shop        - given shop        (in context: currently selected shop)
   * 
   * @returns list of filtered cart items
   */
  transform(cart_items: Cart_Item[], shop: string): Cart_Item[] {
    return cart_items.filter( i => i.shop === shop );
  }

}
