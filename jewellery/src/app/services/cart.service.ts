import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  constructor() {}

  addToCart(product: any): void {
    this.items.push(product);
  }

  getItems(): any[] {
    return this.items;
  }

  removeFromCart(index: number): void {
    this.items.splice(index, 1);
  }

  clearCart(): void {
    this.items = [];
  }
}
