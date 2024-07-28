import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpendantComponent } from './gpendant.component';

describe('GpendantComponent', () => {
  let component: GpendantComponent;
  let fixture: ComponentFixture<GpendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpendantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
