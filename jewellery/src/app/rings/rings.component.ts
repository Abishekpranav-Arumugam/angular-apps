// rings.component.ts
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { JewelleryService } from '../services/jewellery.service';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.css']
})
export class RingsComponent {
  rings = [
    { name: 'Ring 1', price: 'Rs. 9,000', image: './assets/Image/bg-1.jpg' },
    { name: 'Ring 2', price: 'Rs. 12,000', image: './assets/Image/bg-2.jpg' },
    { name: 'Ring 3', price: 'Rs. 10,000', image: './assets/Image/r-1.jpg' },
    { name: 'Ring 4', price: 'Rs. 11,000', image: './assets/Image/bg-3.jpg' }
  ];

  selectedRing: any = null;

  constructor(private cartService: CartService, private jewelleryService: JewelleryService) {}

  setSelectedRing(ring: any) {
    this.selectedRing = ring;
  } 

  addToCart(ring: any) {
    this.cartService.addToCart(ring);
    // Show the cart modal (assuming you have logic to show/hide the modal)
    const cartModal: any = document.getElementById('cartModal');
    cartModal.style.display = 'block';
  }

  confirmOrder(orderData: any) {
    if (this.selectedRing) {
      orderData.itemName = this.selectedRing.name;
      orderData.itemType = 'ring';
      orderData.itemPrice = this.selectedRing.price;

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
    } else {
      alert('Please select a ring before confirming the order.');
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
