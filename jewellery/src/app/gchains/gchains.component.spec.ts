import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GchainsComponent } from './gchains.component';

describe('GchainsComponent', () => {
  let component: GchainsComponent;
  let fixture: ComponentFixture<GchainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GchainsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GchainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
