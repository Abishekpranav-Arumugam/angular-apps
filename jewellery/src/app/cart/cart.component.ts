import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
    this.items = this.cartService.getItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.items = [];
  }
}
