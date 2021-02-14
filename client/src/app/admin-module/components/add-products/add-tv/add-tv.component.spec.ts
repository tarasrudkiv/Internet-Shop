import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTVComponent } from './add-tv.component';

describe('AddTVComponent', () => {
  let component: AddTVComponent;
  let fixture: ComponentFixture<AddTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
