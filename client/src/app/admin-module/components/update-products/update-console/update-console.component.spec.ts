import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConsoleComponent } from './update-console.component';

describe('UpdateConsoleComponent', () => {
  let component: UpdateConsoleComponent;
  let fixture: ComponentFixture<UpdateConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
