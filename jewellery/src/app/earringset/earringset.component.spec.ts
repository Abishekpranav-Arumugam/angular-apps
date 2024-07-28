import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarringsetComponent } from './earringset.component';

describe('EarringsetComponent', () => {
  let component: EarringsetComponent;
  let fixture: ComponentFixture<EarringsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarringsetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarringsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
