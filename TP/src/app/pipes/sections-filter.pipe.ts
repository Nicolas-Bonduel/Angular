import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../classes/product';

@Pipe({
  name: 'sectionsFilter'
})
export class SectionsFilterPipe implements PipeTransform {

  /**
   * Filters given sections to remove those that host no product
   * used in <app-product-navigation>
   * 
   * @param sections  - given sections  (in context: all available sections for all products)
   * @param products  - given products  (in context: all products)
   * 
   * @returns - list of filtered sections
   */
  transform(sections: string[], products: Product[]): string[] {
    let sectionsFiltered = [];

    for (let section of sections) {
      if (products.filter( p => p.tag.includes(section) ).length > 0)
        sectionsFiltered.push(section);
    }

    return sectionsFiltered;
  }

}
