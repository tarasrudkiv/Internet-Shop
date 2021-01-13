import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReComponent } from './user-re.component';

describe('UserReComponent', () => {
  let component: UserReComponent;
  let fixture: ComponentFixture<UserReComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
