import { Injectable } from '@angular/core';
import { CartItem } from './carttem.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public cart: Map<number, CartItem> = new Map();



  load() {
    let encoded = window.localStorage.getItem("trucleanz");
    if (encoded != undefined) {
      let x = JSON.parse(atob(encoded));
      x.forEach((data: any) => this.cart.set(data.item.id, data));
    }

  }

  add(item: any, quantity: number) {
    this.load();
    let x = quantity;
    if (this.cart.has(item.id)) x += this.cart.get(item.id).quantity;
  
    this.cart.set(item.id, {quantity: x, item});

    this.save();
  }

  modify(item: any, quantity: number) {
    this.load();
    if (this.cart.has(item.id)) {
      let qty = this.cart.get(item.id).quantity;
      if (quantity >= qty) this.cart.delete(item.id);
      else this.cart.set(item.id, {quantity, item});
      this.save();
    }
  }

  save() {
    window.localStorage.setItem("trucleanz", btoa(JSON.stringify(Array.from(this.cart.values()))));
  }

  getCart() {
    this.load();
    return this.cart;
  }

  getCartAsArray() {
    this.load();
    return Array.from(this.cart.values());
  }

  cartIsEmpty(): boolean {
    this.load();

    return this.cart.size == 0;

  }
}
