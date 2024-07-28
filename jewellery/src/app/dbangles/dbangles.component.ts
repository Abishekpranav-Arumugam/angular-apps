import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { JewelleryService } from '../services/jewellery.service'; // Assuming you have a service for handling jewellery-related operations

@Component({
  selector: 'app-dbangles',
  templateUrl: './dbangles.component.html',
  styleUrls: ['./dbangles.component.css']
})
export class DbanglesComponent {
  bangles = [
    { name: 'Bangle 1', price: 'Rs. 9,000', image: './assets/dbangles/1.jpg' },
    { name: 'Bangle 2', price: 'Rs. 12,000', image: './assets/dbangles/3.jpg' },
    { name: 'Bangle 3', price: 'Rs. 10,000', image: './assets/dbangles/2.jpg' },
    { name: 'Bangle 4', price: 'Rs. 11,000', image: './assets/dbangles/4.jpg' }
  ];

  selectedBangle: any = null;
  constructor(private cartService: CartService, private jewelleryService: JewelleryService) {}

  setSelectedBangle(bangle: any) {
    this.selectedBangle = bangle;
  }


  
  addToCart(bangle: any) {
    this.cartService.addToCart(bangle);
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
    } else {
      alert('Please select a bangle before confirming the order.');
    }
  }

  buttonWidth = 150; // Adjust according to your needs
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
      totalPrice: "10000.00", // Example total price
      currencyCode: "INR", // Example currency code
      countryCode: "IN" // Example country code
    }
  };

  onLoadPaymentData(event: any) {
    console.log(event, ">> Data");
  }
}
