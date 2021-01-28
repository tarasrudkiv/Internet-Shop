import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageForAdminComponent } from './user-page-for-admin.component';

describe('UserPageForAdminComponent', () => {
  let component: UserPageForAdminComponent;
  let fixture: ComponentFixture<UserPageForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
