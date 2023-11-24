import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Cart_Item } from '../../classes/cart_item';
import { CartService } from '../../services/cart.service';
import { MinicartComponent } from './minicart/minicart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  /* --- @Inputs --- */
  @Input() shops: string[] = [];                              // from <app>: list of available shops

  /* --- @Outputs --- */
  @Output() selectedShopChange = new EventEmitter<string>();  // to <app>: newly selected shop

  /* --- @Input Variables --- */
  public selected_shop: string = "";    // in <app-minicart> : currently selected shop name
  public cart_items: Cart_Item[] = [];  // in <app-minicart> : list of items in cart

  /* --- References --- */
  @ViewChild(MinicartComponent) private comp_minicart!: MinicartComponent;  // minicart Component


  /* --- Init --- */
  constructor(
    private cart: CartService // Service for cart related methods (e.g.: get/add/remove)
  ) {

    // Setup cart callback (will fire given method on cart change)
    cart.register_callback(this.onCartChange.bind(this));

  }

  /* --- @Output Emitters --- */
  /**
   * @Output Emitter - to <app>
   * On shop change, updates public data & outputs newly selected shop
   * 
   * @param $event - todo description
   */
  onShopChange($event: any) { // todo replace any

    // update @Input data
    this.selected_shop = $event.target.value;

    // emit change
    this.selectedShopChange.emit(this.selected_shop);
  }

  /* --- Methods --- */

  /**
   * Toggles minicart visibility
   */
  toggle_minicart() { console.log(this.comp_minicart.ref_minicart.nativeElement.style.right);
    const minicart = this.comp_minicart.ref_minicart.nativeElement;
    if (minicart.style.right === "-25%" || minicart.style.right === "")
      minicart.style.right = "0px";
    else
      minicart.style.right = "-25%";
  }

  /**
   * Updates @Input Variable 'cart_items' to given items
   * 
   * @param items - items in cart
   */
  onCartChange(items: Cart_Item[]) {
    this.cart_items = items.slice();
  }

}
