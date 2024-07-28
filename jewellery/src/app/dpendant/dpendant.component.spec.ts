import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpendantComponent } from './dpendant.component';

describe('DpendantComponent', () => {
  let component: DpendantComponent;
  let fixture: ComponentFixture<DpendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DpendantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DpendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
