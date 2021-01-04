import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithSettingsComponent } from './product-with-settings.component';

describe('ProductWithSettingsComponent', () => {
  let component: ProductWithSettingsComponent;
  let fixture: ComponentFixture<ProductWithSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWithSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWithSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
