import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbraceletComponent } from './dbracelet.component';

describe('DbraceletComponent', () => {
  let component: DbraceletComponent;
  let fixture: ComponentFixture<DbraceletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbraceletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbraceletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
