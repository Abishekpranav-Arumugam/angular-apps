import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { JewelleryService } from '../services/jewellery.service';

@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrls: ['./necklace.component.css']
})
export class NecklaceComponent {
  necklace = [
    { name: 'Necklace 1', price: 'Rs. 9,000', image: './assets/necklace/ons23015_1.jpg' },
    { name: 'Necklace 2', price: 'Rs. 12,000', image: './assets/necklace/R.jpg' },
    { name: 'Necklace 3', price: 'Rs. 10,000', image: './assets/necklace/il_570xN.677939224_77jy.jpg' },
    { name: 'Necklace 4', price: 'Rs. 11,000', image: './assets/necklace/bridal-gold-jewellery-designs.jpg' }
  ];

  selectedNecklace: any = null;

  constructor(private cartService: CartService, private jewelleryService: JewelleryService) {}

  setSelectedNecklace(necklaceItem: any) {
    this.selectedNecklace = necklaceItem;
  }

  addToCart(necklaceItem: any) {
    this.cartService.addToCart(necklaceItem);
    // Show the cart modal
    const cartModal: any = document.getElementById('cartModal');
    cartModal.style.display = 'block';
  }

  confirmOrder(orderData: any) {
    if (this.selectedNecklace) {
      orderData.itemName = this.selectedNecklace.name;
      orderData.itemType = 'necklace';
      orderData.itemPrice = this.selectedNecklace.price;

      this.jewelleryService.addOrder(orderData).subscribe(
        response => {
          console.log('Order placed successfully:', response);
          alert('Order Placed Successfully');
        },
        error => {
          console.error('Error placing order:', error);
          alert('Error placing the order');
        }
      );
    } else {
      alert('Please select a necklace before confirming the order.');
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
