import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbanglesComponent } from './dbangles.component';

describe('DbanglesComponent', () => {
  let component: DbanglesComponent;
  let fixture: ComponentFixture<DbanglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbanglesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbanglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
