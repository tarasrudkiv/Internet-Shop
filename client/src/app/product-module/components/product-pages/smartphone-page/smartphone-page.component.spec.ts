import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonePageComponent } from './smartphone-page.component';

describe('SmartphonePageComponent', () => {
  let component: SmartphonePageComponent;
  let fixture: ComponentFixture<SmartphonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartphonePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
