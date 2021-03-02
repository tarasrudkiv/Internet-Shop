import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardInBasketComponent } from './product-card-in-basket.component';

describe('ProductCardInBasketComponent', () => {
  let component: ProductCardInBasketComponent;
  let fixture: ComponentFixture<ProductCardInBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardInBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardInBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
