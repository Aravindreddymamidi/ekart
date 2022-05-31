import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartItemListComponent} from "./cart-item-list/cart-item-list.component";

const routes: Routes = [
  {path: 'get-items/:userId', component: CartItemListComponent},
  // {path: 'add-to-cart', component: CartItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
