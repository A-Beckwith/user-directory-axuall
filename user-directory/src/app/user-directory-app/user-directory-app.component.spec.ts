import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDirectoryAppComponent } from './user-directory-app.component';

describe('UserDirectoryAppComponent', () => {
  let component: UserDirectoryAppComponent;
  let fixture: ComponentFixture<UserDirectoryAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDirectoryAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDirectoryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
