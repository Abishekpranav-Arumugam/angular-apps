// metal-rates.component.ts

import { Component, OnInit } from '@angular/core';
import { MetalRatesService } from '../metal-rates.service';

@Component({
  selector: 'app-metal-rates',
  templateUrl: './metal-rates.component.html'
})
export class MetalRatesComponent implements OnInit {
  metalRates: any;

  constructor(private metalRatesService: MetalRatesService) { }

  ngOnInit(): void {
    this.metalRatesService.getMetalRates().subscribe(data => {
      this.metalRates = data;
    });
  }
}
