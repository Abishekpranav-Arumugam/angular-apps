import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinFiveTenComponent } from './coin-five-ten.component';

describe('CoinFiveTenComponent', () => {
  let component: CoinFiveTenComponent;
  let fixture: ComponentFixture<CoinFiveTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinFiveTenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinFiveTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
