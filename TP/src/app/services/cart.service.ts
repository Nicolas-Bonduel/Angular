import { Injectable } from '@angular/core';
import { Cart_Item } from '../classes/cart_item';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /* --- Variables Declaration --- */
  private items: Cart_Item[] = [];    // items in cart
  private callbacks: Function[] = []; // callbacks to fire on cart change

  /* --- Init --- */
  constructor() {
    /*this.items = [
      {
        shop: "Vieux-Lille",
        product_ref: "product ref",
        product_thumbnail: "ailerons_par_5.jpg",
        unit_price: 2.5,
        quantity: 1
      },
      {
        shop: "Vieux-Lille",
        product_ref: "product refproduct refproduct refproduct refproduct refproduct refproduct refproduct refproduct refproduct ref",
        product_thumbnail: "ailerons_par_5.jpg",
        unit_price: 5.5,
        quantity: 10
      },
      {
        shop: "Vieux-Lille",
        product_ref: "product ref",
        product_thumbnail: "ailerons_par_5.jpg",
        unit_price: 2.5,
        quantity: 1
      },
      {
        shop: "Lille Europe",
        product_ref: "product ref",
        product_thumbnail: "ailerons_par_5.jpg",
        unit_price: 2.5,
        quantity: 1
      }
    ];*/
  }

  /* --- Methods --- */

  /**
   * Registers a callback to fire on cart change
   * 
   * @param callback - callback function (accepts 1 argument of type <Cart_Item[]>)
   */
  register_callback(callback: Function) {
    // todo check for duplicates before adding

    this.callbacks.push(callback);
  }

  /**
   * Fires all callbacks with cart items as argument
   */
  fire_callbacks() {
    this.callbacks.forEach(callback => callback(this.items));
  }


  /**
   * Gets items in cart
   * 
   * @returns list of cart items
   */
  get_items(): Cart_Item[] {
    return this.items;
  }

  /**
   * Adds a product to cart
   * 
   * @param product - product to add
   */
  add_to_cart(product: Product) {

    // searches for given product in cart
    let idx = this.items.findIndex(i => i.shop === product.shop && i.product_ref === product.name);

    // adds product to cart
    if (idx > -1 ) {  // is already in cart
      // increment quantity
      this.items[idx].quantity = this.items[idx].quantity + 1;
    }
    else {            // is not yet in cart
      // add to cart
      this.items.push({
        shop: product.shop,
        product_ref: product.name,
        product_thumbnail: product.img,
        unit_price: product.unit_price,
        quantity: 1
      });
    }

    // notifies cart change
    this.fire_callbacks();

  }
  /**
   * Removes a product from cart
   * 
   * @param item - item to remove
   */
  remove_from_cart(item: Cart_Item) {

    // searches for given product ref in cart
    let idx = this.items.findIndex(i => i === item);
    if (idx === -1) {
      console.warn(`Failed to remove product '${item.product_ref}' in shop '${item.shop}' from cart`);
      return;
    }

    // removes from cart
    this.items.splice(idx, 1);

    // notifies cart change
    this.fire_callbacks();

  }

}
