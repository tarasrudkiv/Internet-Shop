import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSmartWatchComponent } from './update-smart-watch.component';

describe('UpdateSmartWatchComponent', () => {
  let component: UpdateSmartWatchComponent;
  let fixture: ComponentFixture<UpdateSmartWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSmartWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSmartWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
