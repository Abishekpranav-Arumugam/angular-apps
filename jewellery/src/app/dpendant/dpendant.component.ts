import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { JewelleryService } from '../services/jewellery.service'; // Adjust the path as per your project structure

@Component({
  selector: 'app-dpendant',
  templateUrl: './dpendant.component.html',
  styleUrls: ['./dpendant.component.css']
})
export class DpendantComponent {
  pendant = [
    { name: 'Pendant 1', price: 'Rs. 9,000', image: './assets/dpendant/2.jpg' },
    { name: 'Pendant 2', price: 'Rs. 12,000', image: './assets/dpendant/1.jpg' },
    { name: 'Pendant 3', price: 'Rs. 10,000', image: './assets/dpendant/3.jpg' },
    { name: 'Pendant 4', price: 'Rs. 11,000', image: './assets/dpendant/4.jpg' }
  ];

  selectedPendant: any = null;

  constructor(private cartService: CartService, private jewelleryService: JewelleryService) {}

  setSelectedPendant(pendant: any) {
    this.selectedPendant = pendant;
  }

  addToCart(pendant: any) {
    this.cartService.addToCart(pendant);
    // Show the cart modal (assuming you have logic to show/hide the modal)
    const cartModal: any = document.getElementById('cartModal');
    cartModal.style.display = 'block';
  }
  confirmOrder(orderData: any) {
    if (this.selectedPendant) {
      orderData.itemName = this.selectedPendant.name;
      orderData.itemType = 'pendant';
      orderData.itemPrice = this.selectedPendant.price;
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
      alert('Please select a pendant before confirming the order.');
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
