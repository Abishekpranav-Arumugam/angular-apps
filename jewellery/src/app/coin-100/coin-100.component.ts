import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { JewelleryService } from '../services/jewellery.service';

@Component({
  selector: 'app-coin-100',
  templateUrl: './coin-100.component.html',
  styleUrls: ['./coin-100.component.css']
})
export class Coin100Component {
  coins = [
    { name: '5 gram', price: 'Rs. 9,000', image: './assets/coins/50g1.jpg' },
    { name: '10 gram', price: 'Rs. 12,000', image: './assets/coins/50g2.jpg' },
    { name: '5 gram', price: 'Rs. 10,000', image: './assets/coins/100g1.jpg' },
    { name: '10 gram', price: 'Rs. 11,000', image: './assets/coins/100g2.jpg' }
  ];

  selectedCoin: any = null;

  constructor(private cartService: CartService, private jewelleryService: JewelleryService) {}

  setSelectedCoin(coin: any) {
    this.selectedCoin = coin;
  }

  addToCart(coin: any) {
    this.cartService.addToCart(coin);
    // Show the cart modal (assuming you have logic to show/hide the modal)
    const cartModal: any = document.getElementById('cartModal');
    cartModal.style.display = 'block';
  }


  confirmOrder(orderData: any) {
    if (this.selectedCoin) {
      orderData.itemName = this.selectedCoin.name;
      orderData.itemType = 'coin';
      orderData.itemPrice = this.selectedCoin.price;

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
      alert('Please select a coin before confirming the order.');
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
