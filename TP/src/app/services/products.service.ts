import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsInShop = new BehaviorSubject<Product[]>([]);

  productsInShop$ = this.productsInShop.asObservable();

  constructor() { }

  setProductsInShop(products: Product[]) {
    this.productsInShop.next(products);
  }
}
