import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../classes/product';

@Pipe({
  name: 'tagsFilter'
})
export class TagsFilterPipe implements PipeTransform {

  /**
   * Filters given tags to remove those that host no product in current section
   * Also converts it to a Map to add the amount of products that match each tag (for conditionnal plural)
   * used in <app-content>
   * 
   * @param tags      - given tags      (in context: all available tags for all products)
   * @param products  - given products  (in context: all products belonging to given section)
   * @param section   - given section   (in context: currently parsed section)
   * 
   * @returns - list of filtered tags as <key, value> = <tag, amount of products in tag>
   */
  transform(tags: string[], products: Product[], section: string): Map<string, number> {
    let tagsFilteredMap = new Map();

    let count: number;
    for (let tag of tags) {
      count = products.filter( p => p.tag.includes(section) && p.tag.includes(tag) ).length;
      if (count > 0)
        tagsFilteredMap.set(tag, count);
    }

    return tagsFilteredMap;
  }

}
