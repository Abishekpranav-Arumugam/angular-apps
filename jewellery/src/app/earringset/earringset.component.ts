import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { JewelleryService } from '../services/jewellery.service';

@Component({
  selector: 'app-earringset',
  templateUrl: './earringset.component.html',
  styleUrls: ['./earringset.component.css']
})
export class EarringsetComponent {
  earrings = [
    { name: 'Earring 1', price: 'Rs. 9,000', image: './assets/earrings/OIP.jpg' },
    { name: 'Earring 2', price: 'Rs. 12,000', image: './assets/earrings/59297_1.jpg' },
    { name: 'Earring 3', price: 'Rs. 10,000', image: './assets/earrings/OIP (2).jpg' },
    { name: 'Earring 4', price: 'Rs. 11,000', image: './assets/earrings/DazzlingPearls2.webp' }
  ];

  selectedEarring: any = null;

  constructor(private cartService: CartService, private jewelleryService: JewelleryService) {}

  setSelectedEarring(earring: any) {
    this.selectedEarring = earring;
  }

  addToCart(earring: any) {
    this.cartService.addToCart(earring);
    // Show the cart modal
    const cartModal: any = document.getElementById('cartModal');
    cartModal.style.display = 'block';
  }

  confirmOrder(orderData: any) {
    if (this.selectedEarring) {
      orderData.itemName = this.selectedEarring.name;
      orderData.itemType = 'earring';
      orderData.itemPrice = this.selectedEarring.price;

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
      alert('Please select an earring before confirming the order.');
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
