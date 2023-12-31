import { Component } from '@angular/core';

import { Product } from './classes/product';
import { PRODUCTS } from '../assets/products';

import { ProductsService } from './services/products.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  /* --- Dataset : List of products with attributes --- */
  private products: Product[];// = PRODUCTS;

  /* --- @Input Variables --- */
  public shops: string[] = [];                    // in <app-header>  : list of available shops for parsed products
  public selected_shop_products: Product[] = [];  // in <app-content> : list of products belonging to currently selected shop


  /* --- Init --- */
  constructor(
    private productService: ProductsService,
    private router: Router) {

    this.products = [];

    productService.get_products().subscribe((products) => {
      this.products = products;

      let parsed_product: Product;
      for (let i = 0; i < this.products.length; i++) {
        parsed_product = this.products[i];
        if (parsed_product.shop === "")
          continue;

        // registers available shops
        if (!this.shops.includes(parsed_product.shop))
          this.shops.push(parsed_product.shop); 
      }
    });

    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd))
        return;

      //console.log(event);
    });
    
    // Parses product data
    /*let parsed_product: Product;
    for (let i = 0; i < this.products.length; i++) {
      parsed_product = this.products[i];
      if (parsed_product.shop === "")
        continue;

      // registers available shops
      if (!this.shops.includes(parsed_product.shop))
        this.shops.push(parsed_product.shop); 
    }*/

  }

  /* --- @Output Listeners --- */
  /**
   * @Output Listener - from <app-header>
   * On shop change, updates the list of products
   * belonging to currently selected shop
   * 
   * @param shop - name of selected shop
   */
  onShopChange(shop: string) {
    // Sanity Check
    if (!this.shops.includes(shop))
      return;

    // Update Selected Shop Products
    this.selected_shop_products = [];
    this.products.forEach((product) => { // todo @input var in loop, is it a problem?
      if (product.shop === shop)
        this.selected_shop_products.push(product);
    });

    this.productService.setProductsInShop(this.selected_shop_products);
  }

}
