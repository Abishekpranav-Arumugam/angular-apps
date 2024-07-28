import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosepinComponent } from './nosepin.component';

describe('NosepinComponent', () => {
  let component: NosepinComponent;
  let fixture: ComponentFixture<NosepinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NosepinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosepinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
