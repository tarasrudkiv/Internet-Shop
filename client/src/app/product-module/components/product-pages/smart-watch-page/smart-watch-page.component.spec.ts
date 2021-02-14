import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartWatchPageComponent } from './smart-watch-page.component';

describe('SmartWatchPageComponent', () => {
  let component: SmartWatchPageComponent;
  let fixture: ComponentFixture<SmartWatchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartWatchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartWatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
