import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Product } from '../../classes/product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  /* --- @Inputs --- */
  public _products: Product[] = [];
  @Input()                                // from <app>: list of products belonging to currently selected shop
    get products(): Product[] {
      return this._products;
    }
    set products(products: Product[]) {
      this._products = products;
      this.updatePublicData();
    }

  /* --- @Input Variables --- */
  public sections: string[] = []; // in <app-product-navigation> : available sections for parsed products (updated on products change)
  public tags: string[] = [];     // in <app-product-navigation> : available tags for parsed products (updated on products change)


  /* --- Init --- */
  constructor() {
    
  }


  /**
   * Updates public data (called on @Input products change)
   */
  updatePublicData(): void {
    // resets public data
    this.sections = [];
    this.tags = [];

    // assign public data
    let parsed_tags: string[];
    for (let i = 0; i < this._products.length; i++) {
      parsed_tags = this.get_product_tags(this.products[i]);

      parsed_tags.forEach(tag => {
        // "snacking" & "shop" tags are sections
        if (tag === "snacking" && !this.sections.includes("snacking"))
          this.sections.push("snacking");
        if (tag === "shop" && !this.sections.includes("shop")) 
          this.sections.push("shop");

        // don't add "snacking" or "shop" to tags
        if (tag === "snacking" || tag === "shop")
          return;

        // any other tag is a tag
        if (!this.tags.includes(tag))
          this.tags.push(tag);
      });

    }
  }

  /**
   * Converts a "<tag_1> | <tag_2> | ... | <tag_n>" string to a [<tag_1>, <tag_2>, ..., <tag_n>] List
   * 
   * @param product - product to parse for tags
   * @returns list of product tags
   */
  get_product_tags(product: Product): string[] {
    return product.tag.replace(/\s+/g, '').split('|');
  }
  
}
