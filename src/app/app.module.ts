import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import {HttpClientModule} from "@angular/common/http";
import {CartServiceService} from "./cart-service.service";

@NgModule({
  declarations: [
    AppComponent,
    CartItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
