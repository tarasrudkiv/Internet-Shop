import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularProductCardComponent } from './most-popular-product-card.component';

describe('MostPopularProductCardComponent', () => {
  let component: MostPopularProductCardComponent;
  let fixture: ComponentFixture<MostPopularProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPopularProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
