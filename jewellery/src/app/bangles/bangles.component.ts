// bangles.component.ts
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { JewelleryService } from '../services/jewellery.service';

@Component({
  selector: 'app-bangles',
  templateUrl: './bangles.component.html',
  styleUrls: ['./bangles.component.css']
})
export class BanglesComponent {
  bangles = [
    { name: 'Bangle 1', price: 'Rs. 9,000', image: './assets/Image/OIP.jpg' },
    { name: 'Bangle 2', price: 'Rs. 12,000', image: './assets/Image/31.jpg' },
    { name: 'Bangle 3', price: 'Rs. 10,000', image: './assets/Image/product.jpg' },
    { name: 'Bangle 4', price: 'Rs. 11,000', image: './assets/Image/28.jpg' }
  ];
  selectedBangle: any = null;

  constructor(private cartService: CartService, private jewelleryService: JewelleryService) {}

  setSelectedBangle(bangle: any) {
    this.selectedBangle = bangle;
  }

  addToCart(ring: any) {
    this.cartService.addToCart(ring);
    // Show the cart modal (assuming you have logic to show/hide the modal)
    const cartModal: any = document.getElementById('cartModal');
    cartModal.style.display = 'block';
  }

  confirmOrder(orderData: any) {
    if (this.selectedBangle) {
      orderData.itemName = this.selectedBangle.name;
      orderData.itemType = 'bangle';
      orderData.itemPrice = this.selectedBangle.price;

      this.jewelleryService.addOrder(orderData).subscribe(
        response => {
          console.log('Order placed successfully:', response);
          alert('Order Placed Successfully');
        },
        error => {
          console.error('Error placing order:', error);
          alert('Error placing order: ' + error.message);
        }
      );
    } 
  }

  buttonWidth = 150;
  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "8300.00",
      currencyCode: "INR",
      countryCode: "IN"
    }
  };
  onLoadPaymentData(event: any) {
    console.log(event, ">> Data");
  }

}
