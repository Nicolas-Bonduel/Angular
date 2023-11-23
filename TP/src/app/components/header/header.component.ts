import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PRODUCTS } from '../../../assets/products';
import { Product } from '../../classes/product';

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


  /* --- Init --- */
  constructor() {
  
  }

  /* --- @Output Emitters --- */
  /**
   * @Output Emitter - to <app>
   * On shop change, outputs newly selected shop
   * 
   * @param $event - todo description
   */
  onShopChange($event: any) { // todo replace any
    this.selectedShopChange.emit($event.target.value);
  }

}
