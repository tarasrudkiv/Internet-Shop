import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardForUserComponent } from './order-card-for-user.component';

describe('OrderCardForUserComponent', () => {
  let component: OrderCardForUserComponent;
  let fixture: ComponentFixture<OrderCardForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCardForUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCardForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
