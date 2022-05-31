import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CartItem} from "./cart-item";
import {AddProductRequest} from "./add-product-request";

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private getCartItemsUrl: string | undefined;
  private postCartItemsUrl: string;

  constructor(private http: HttpClient) {
    this.postCartItemsUrl = 'http://localhost:8080/add-to-cart';
  }

  public findAll(): Observable<CartItem[]> {
    this.getCartItemsUrl = 'http://localhost:8080/get-items/1001';
    return this.http.get<CartItem[]>(this.getCartItemsUrl);
  }

  public save(addProductRequest: AddProductRequest) {
    return this.http.post<AddProductRequest>(this.postCartItemsUrl, addProductRequest);
  }
}
