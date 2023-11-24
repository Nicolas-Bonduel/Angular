import { Component, Input, ViewChild } from '@angular/core';
import { Product } from '../../../../classes/product';
import { FormProductSearchComponent } from '../../../forms/form-product-search/form-product-search.component';

@Component({
  selector: 'app-product-navigation',
  templateUrl: './product-navigation.component.html',
  styleUrl: './product-navigation.component.css'
})
export class ProductNavigationComponent {

  /* --- @Inputs --- */
  public _products: Product[] = [];
  @Input()                            // from <app-content> : list of products belonging to currently selected shop
    get products(): Product[] {
      return this._products;
    }
    set products(products: Product[]) {
      this._products = products;
      this.updatePublicData();
    }
  @Input() sections: string[] = [];   // from <app-content> : available sections for parsed products (updated on products change)
  @Input() tags: string[] = [];       // from <app-content> : available tags for parsed products (updated on products change)

  /* --- @Input Variables --- */
  public products_in_search: Product[] = [];  // in <app-form-product-search> : products whose names match search string

  /* --- References --- */
  @ViewChild(FormProductSearchComponent) private comp_productSearch!: FormProductSearchComponent; // product search form Component


  /**
   * Updates public data (called on @Input products change)
   */
  updatePublicData() {
    // reset public data
    this.products_in_search = [];

    // sanity check
    if (!this.comp_productSearch) {
      this.products_in_search = this._products.slice();
      return;
    }
    
    // assign public data
    let search_string = this.comp_productSearch.search_string;
    for (let product of this._products) {
      if (product.name.toLowerCase().includes(search_string.toLowerCase()))
        this.products_in_search.push(product);
    }
  }

}
