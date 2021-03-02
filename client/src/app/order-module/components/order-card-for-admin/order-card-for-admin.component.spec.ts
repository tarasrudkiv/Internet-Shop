import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardForAdminComponent } from './order-card-for-admin.component';

describe('OrderCardForAdminComponent', () => {
  let component: OrderCardForAdminComponent;
  let fixture: ComponentFixture<OrderCardForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCardForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCardForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
