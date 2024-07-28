// home.component.ts
import { Component, OnInit } from '@angular/core';
import { GoldApiService } from '../services/goldapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  goldPrice: number | undefined;
  error: string | undefined;

  constructor(private goldApiService: GoldApiService) {}

  ngOnInit(): void {
    this.fetchGoldPrice();
  }

  fetchGoldPrice(): void {
    this.goldApiService.getGoldPrice().subscribe(
      data => {
        this.goldPrice = data.price;
      },
      error => {
        console.error('Error fetching gold price', error);
        this.error = 'Error fetching gold price';
      }
    );
  }
}
