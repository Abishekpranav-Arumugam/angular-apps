import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DringComponent } from './dring.component';

describe('DringComponent', () => {
  let component: DringComponent;
  let fixture: ComponentFixture<DringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
