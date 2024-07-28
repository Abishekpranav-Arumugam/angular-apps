import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coin100Component } from './coin-100.component';

describe('Coin100Component', () => {
  let component: Coin100Component;
  let fixture: ComponentFixture<Coin100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Coin100Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Coin100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
