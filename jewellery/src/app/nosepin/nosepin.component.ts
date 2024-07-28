import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { JewelleryService } from '../services/jewellery.service';

@Component({
  selector: 'app-nosepin',
  templateUrl: './nosepin.component.html',
  styleUrls: ['./nosepin.component.css']
})
export class NosepinComponent {
  nosepins = [
    { name: 'Nosepin 1', price: 'Rs. 9,000', image: './assets/nosepin/2.jpg' },
    { name: 'Nosepin 2', price: 'Rs. 12,000', image: './assets/nosepin/3.webp' },
    { name: 'Nosepin 3', price: 'Rs. 10,000', image: './assets/nosepin/5.jpg' },
    { name: 'Nosepin 4', price: 'Rs. 11,000', image: './assets/nosepin/9.jpg' }
  ];

  selectedNosepin: any = null;

  constructor(private cartService: CartService, private jewelleryService: JewelleryService) {}

  setSelectedNosepin(nosepin: any) {
    this.selectedNosepin = nosepin;
  }

  addToCart(nosepin: any) {
    this.cartService.addToCart(nosepin);
    // Show the cart modal (assuming you have logic to show/hide the modal)
    const cartModal: any = document.getElementById('cartModal');
    cartModal.style.display = 'block';
  }
  confirmOrder(orderData: any) {
    if (this.selectedNosepin) {
      orderData.itemName = this.selectedNosepin.name;
      orderData.itemType = 'nosepin';
      orderData.itemPrice = this.selectedNosepin.price;

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
      alert('Please select a nosepin before confirming the order.');
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
