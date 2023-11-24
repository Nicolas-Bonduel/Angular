import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Cart_Item } from '../../../classes/cart_item';

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrl: './minicart.component.css'
})
export class MinicartComponent {

  /* --- @Inputs --- */
  @Input() shop: string = "";             // from <app-header> : currently selected shop name
  @Input() cart_items: Cart_Item[] = [];  // from <app-header> : items in cart

  /* --- References --- */
  @ViewChild('minicart') ref_minicart!: ElementRef; // minicart DOM element

  constructor () {
    
  }
  
  /**
   * Closes minicart
   */
  close_minicart() {
    this.ref_minicart.nativeElement.style.right = "-25%";
  }

}
