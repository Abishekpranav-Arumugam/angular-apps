import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { JewelleryService } from '../services/jewellery.service';

@Component({
  selector: 'app-gchains',
  templateUrl: './gchains.component.html',
  styleUrls: ['./gchains.component.css']
})
export class GchainsComponent {
  gchain = [
    { name: 'Chain 1', price: 'Rs. 9,000', image: './assets/chain/OIP (5).jpg' },
    { name: 'Chain 2', price: 'Rs. 12,000', image: './assets/chain/OIP (1).jpg' },
    { name: 'Chain 3', price: 'Rs. 10,000', image: './assets/chain/OIP (4).jpg' },
    { name: 'Chain 4', price: 'Rs. 11,000', image: './assets/chain/5.webp' }
  ];

  selectedChain: any = null;

  constructor(private cartService: CartService, private jewelleryService: JewelleryService) {}

  addToCart(chain: any) {
    this.cartService.addToCart(chain);
    // Show the cart modal (assuming you have logic to show/hide the modal)
    const cartModal: any = document.getElementById('cartModal');
    cartModal.style.display = 'block';
  }

  setSelectedChain(chain: any) {
    this.selectedChain = chain;
  }

  confirmOrder(orderData: any) {
    if (this.selectedChain) {
      orderData.itemName = this.selectedChain.name;
      orderData.itemType = 'chain';
      orderData.itemPrice = this.selectedChain.price;

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
      alert('Please select a chain before confirming the order.');
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
