import {Component, OnInit} from '@angular/core';
import {CartServiceService} from "../cart-service.service";
import {CartItem} from "../cart-item";

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {

  cartItemList: CartItem[] | undefined;

  constructor(private cartServiceService: CartServiceService) {
  }

  ngOnInit(): void {
    this.cartServiceService.findAll().subscribe(cartItem => {
      console.log("#######CartItem", cartItem)
      this.cartItemList = cartItem;
    });
  }

}
