import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { JewelleryService } from '../services/jewellery.service'; // Adjust the path as per your project structure

@Component({
  selector: 'app-dbracelet',
  templateUrl: './dbracelet.component.html',
  styleUrls: ['./dbracelet.component.css']
})
export class DbraceletComponent {

  bracelet = [
    { name: 'Bracelet 1', price: 'Rs. 9,000', image: './assets/dbracelet/1.webp' },
    { name: 'Bracelet 2', price: 'Rs. 12,000', image: './assets/dbracelet/2.jpg' },
    { name: 'Bracelet 3', price: 'Rs. 10,000', image: './assets/dbracelet/4.jpg' },
    { name: 'Bracelet 4', price: 'Rs. 11,000', image: './assets/dbracelet/3.jpg' }
  ];

  selectedBracelet: any = null;

  constructor(private cartService: CartService, private jewelleryService: JewelleryService) {}

  setSelectedBracelet(bracelet: any) {
    this.selectedBracelet = bracelet;
  }
  addToCart(bracelet: any) {
    this.cartService.addToCart(bracelet);
    // Show the cart modal (assuming you have logic to show/hide the modal)
    const cartModal: any = document.getElementById('cartModal');
    cartModal.style.display = 'block';
  }
  confirmOrder(orderData: any) {
    if (this.selectedBracelet) {
      orderData.itemName = this.selectedBracelet.name;
      orderData.itemType = 'bracelet';
      orderData.itemPrice = this.selectedBracelet.price;
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
      alert('Please select a bracelet before confirming the order.');
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
