import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsInShop = new BehaviorSubject<Product[]>([]);
  productsInShop$ = this.productsInShop.asObservable();


  constructor(private http: HttpClient) { }


  setProductsInShop(products: Product[]): void {
    this.productsInShop.next(products);
  }

  get_products(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8000/products");
  }

}
