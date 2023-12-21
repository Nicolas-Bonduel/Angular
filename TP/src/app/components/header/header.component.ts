// #region imports
import { TestCaseService } from '../../services/test-case.service';

import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Cart_Item } from '../../classes/cart_item';
import { CartService } from '../../services/cart.service';
import { MinicartComponent } from './minicart/minicart.component';
// #endregion

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // #region don't care
  /* --- @Inputs --- */
  @Input() shops: string[] = [];                              // from <app>: list of available shops

  /* --- @Outputs --- */
  @Output() selectedShopChange = new EventEmitter<string>();  // to <app>: newly selected shop

  /* --- @Input Variables --- */
  public selected_shop: string = "";    // in <app-minicart> : currently selected shop name
  // #endregion
  public cart_items: Cart_Item[] = [];  // in <app-minicart> : list of items in cart

  // #region don't care
  /* --- References --- */
  @ViewChild(MinicartComponent) private comp_minicart!: MinicartComponent;  // minicart Component
  // #endregion

  /* --- Init --- */
  constructor(
    private testCaseService: TestCaseService,
    private cart: CartService // Service for cart related methods (e.g.: get/add/remove)
  ) {

    // #region TEST CASE: Old School

      if (testCaseService.TEST_CASE === "Old School") { console.log("[TEST CASE: Old School] Init callback");
        // Setup cart callback (will fire given method on cart change)
        cart.register_callback(this.onCartChange.bind(this));
      }

    // #endregion

    // #region TEST CASE: Subject

      if (testCaseService.TEST_CASE === "Subject") { console.log("[TEST CASE: Subject] Subscribing to cart change");
        cart.cart_change__Subject.subscribe(items => { console.log("[TEST CASE: Subject] Received cart change");
          this.onCartChange(items);
        });
      }

    // #endregion

    // #region TEST CASE: Subject As Observable

      if (testCaseService.TEST_CASE === "Subject As Observable") { console.log("[TEST CASE: Subject As Observable] Subscribing to cart change");
        cart.cart_change$__Subject_As_Observable.subscribe(items => { console.log("[TEST CASE: Subject As Observable] Received cart change");
          this.onCartChange(items);
        });
      }

    // #endregion

    // #region TEST CASE: Behavior Subject

      if (testCaseService.TEST_CASE === "Behavior Subject") { console.log("[TEST CASE: Behavior Subject] Subscribing to cart change");
        cart.cart_change__Behavior_Subject.subscribe(items => { console.log("[TEST CASE: Behavior Subject] Received cart change");
          this.onCartChange(items);
        });
      }

    // #endregion

    // #region TEST CASE: Behavior Subject As Observable

      if (testCaseService.TEST_CASE === "Behavior Subject As Observable") { console.log("[TEST CASE: Behavior Subject As Observable] Subscribing to cart change");
        cart.cart_change$__Behavior_Subject_As_Observable.subscribe(items => { console.log("[TEST CASE: Behavior Subject As Observable] Received cart change");
          this.onCartChange(items);
        });
      }

    // #endregion

    // #region TEST CASE: Observable

      if (this.testCaseService.TEST_CASE === "Observable") { console.log("[TEST CASE: Observable] Subscribing to cart change");
        cart.cart_change$_Observable.subscribe(items => { console.log("[TEST CASE: Observable] Received cart change");
          this.onCartChange(items);
        });
      }

    // #endregion

  }
  // #region don't care
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
  toggle_minicart() {
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
  // #endregion

}
