import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../classes/product';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  /**
   * Filters products to remove those that do not have both given section and given tag
   * used in <app-content>
   * 
   * @param products  - given products  (in context: all products belonging to given section)
   * @param section   - given section   (in context: currently parsed section)
   * @param tag       - given tag       (in context: currently parsed tag)
   * 
   * @returns list of filtered products
   */
  transform(products: Product[], section: string, tag: string): Product[] {
    return products.filter( p => p.tag.includes(section) && p.tag.includes(tag) );
  }

}
