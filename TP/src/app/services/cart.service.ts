// #region Imports
import { TestCaseService } from './test-case.service';

import { Injectable } from '@angular/core';
import { Cart_Item } from '../classes/cart_item';
import { Product } from '../classes/product';
import { Observable, Observer, Subject, BehaviorSubject, Subscriber } from 'rxjs';
// #endregion

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /* ------------------------------------------------ Variables Declaration ------------------------------------------------ */
  private items: Cart_Item[] = [];    // items in cart

  // #region TEST CASE: Old School

    private callbacks: Function[] = []; // callbacks to fire on cart change
  
  // #endregion

  // #region TEST CASE: Subject

    public cart_change__Subject: Subject<Cart_Item[]> = new Subject();

  // #endregion

  // #region TEST CASE: Subject As Observable

    public cart_change__Subject_As_Observable: Subject<Cart_Item[]> = new Subject();
    public cart_change$__Subject_As_Observable: Observable<Cart_Item[]> = this.cart_change__Subject_As_Observable.asObservable();

  // #endregion

  // #region TEST CASE: Behavior Subject

    public cart_change__Behavior_Subject: Subject<Cart_Item[]> = new BehaviorSubject<Cart_Item[]>([]);

  // #endregion

  // #region TEST CASE: Behavior Subject As Observable

    public cart_change__Behavior_Subject_As_Observable: Subject<Cart_Item[]> = new BehaviorSubject<Cart_Item[]>([]);
    public cart_change$__Behavior_Subject_As_Observable: Observable<Cart_Item[]> = this.cart_change__Behavior_Subject_As_Observable.asObservable();
  
  // #endregion

  // #region TEST CASE: Observable

    public observer = (subscriber: { next: (arg0: Cart_Item[]) => void; }) => { subscriber.next(this.items); }
    public cart_change$_Observable: Observable<Cart_Item[]> = new Observable(this.observer);

  // #endregion


  /* -------------------------------------------------------- Init --------------------------------------------------------- */
  constructor( private testCaseService: TestCaseService ) {}


  /* ------------------------------------------------------- Methods ------------------------------------------------------- */

  // #region TEST CASE: Old School

    /**
     * Registers a callback to fire on cart change
     * 
     * @param callback - callback function (accepts 1 argument of type <Cart_Item[]>)
     */
    register_callback(callback: Function) { console.log("[TEST CASE: Old School] Registering callback");
      this.callbacks.push(callback); // todo check for duplicates before adding
    }

    /**
     * Fires all callbacks with cart items as argument
     */
    fire_callbacks() { console.log("[TEST CASE: Old School] Firing callback");
      this.callbacks.forEach(callback => callback(this.items));
    }

  // #endregion

  /**
   * Adds a product to cart
   * 
   * @param product - product to add
   */
  add_to_cart(product: Product) {

    // #region logic

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

    // #endregion

    // #region TEST CASE: Old School

      if (this.testCaseService.TEST_CASE === "Old School") { console.log("[TEST CASE: Old School] Added item to cart");
        // notifies cart change
        this.fire_callbacks();
      }

    // #endregion

    // #region TEST CASE: Subject

      if (this.testCaseService.TEST_CASE === "Subject") { console.log("[TEST CASE: Subject] Added item to cart");
        this.cart_change__Subject.next(this.items);
      }

    // #endregion

    // #region TEST CASE: Subject As Observable

      if (this.testCaseService.TEST_CASE === "Subject As Observable") { console.log("[TEST CASE: Subject As Observable] Added item to cart");
        this.cart_change__Subject_As_Observable.next(this.items);
      }

    // #endregion

    // #region TEST CASE: Behavior Subject

      if (this.testCaseService.TEST_CASE === "Behavior Subject") { console.log("[TEST CASE: Behavior Subject] Added item to cart");
        this.cart_change__Behavior_Subject.next(this.items);
      }

    // #endregion

    // #region TEST CASE: Behavior Subject As Observable

      if (this.testCaseService.TEST_CASE === "Behavior Subject As Observable") { console.log("[TEST CASE: Behavior Subject As Observable] Added item to cart");
        this.cart_change__Behavior_Subject_As_Observable.next(this.items);
      }

    // #endregion

    // #region TEST CASE: Observable

      if (this.testCaseService.TEST_CASE === "Observable") { console.log("[TEST CASE: Observable] Added item to cart");
        this.cart_change$_Observable = new Observable(observer => observer.next(this.items));
      }  

    // #endregion

  }
  /**
   * Removes a product from cart
   * 
   * @param item - item to remove
   */
  remove_from_cart(item: Cart_Item) {

    // #region logic

      // searches for given product ref in cart
      let idx = this.items.findIndex(i => i === item);
      if (idx === -1) {
        console.warn(`Failed to remove product '${item.product_ref}' in shop '${item.shop}' from cart`);
        return;
      }

      // removes from cart
      this.items.splice(idx, 1);

    // #endregion

    // #region TEST CASE: Old School

      if (this.testCaseService.TEST_CASE === "Old School") { console.log("[TEST CASE: Old School] Removed item from cart");
        // notifies cart change
        this.fire_callbacks();
      }

    // #endregion

    // #region TEST CASE: Subject

      if (this.testCaseService.TEST_CASE === "Subject") { console.log("[TEST CASE: Subject] Removed item from cart");
        this.cart_change__Subject.next(this.items);
      }

    // #endregion

    // #region TEST CASE: Subject As Observable

      if (this.testCaseService.TEST_CASE === "Subject As Observable") { console.log("[TEST CASE: Subject As Observable] Removed item from cart");
        this.cart_change__Subject_As_Observable.next(this.items);
      }

    // #endregion

    // #region TEST CASE: Behavior Subject

      if (this.testCaseService.TEST_CASE === "Behavior Subject") { console.log("[TEST CASE: Behavior Subject] Removed item from cart");
        this.cart_change__Behavior_Subject.next(this.items);
      }

    // #endregion

    // #region TEST CASE: Behavior Subject As Observable

      if (this.testCaseService.TEST_CASE === "Behavior Subject As Observable") { console.log("[TEST CASE: Behavior Subject As Observable] Removed item from cart");
        this.cart_change__Behavior_Subject_As_Observable.next(this.items);
      }

    // #endregion

  }

}
