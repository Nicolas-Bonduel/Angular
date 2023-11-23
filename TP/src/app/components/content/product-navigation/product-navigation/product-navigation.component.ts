import { Component, Input } from '@angular/core';
import { Product } from '../../../../classes/product';

@Component({
  selector: 'app-product-navigation',
  templateUrl: './product-navigation.component.html',
  styleUrl: './product-navigation.component.css'
})
export class ProductNavigationComponent {

  /* --- @Inputs --- */
  @Input() products: Product[] = [];  // from <app-content> : list of products belonging to currently selected shop
  @Input() sections: string[] = [];   // from <app-content> : available sections for parsed products (updated on products change)
  @Input() tags: string[] = [];       // from <app-content> : available tags for parsed products (updated on products change)

}
