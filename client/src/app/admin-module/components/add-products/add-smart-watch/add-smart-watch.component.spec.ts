import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmartWatchComponent } from './add-smart-watch.component';

describe('AddSmartWatchComponent', () => {
  let component: AddSmartWatchComponent;
  let fixture: ComponentFixture<AddSmartWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSmartWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSmartWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
