import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListRowComponent } from './profile-list-row.component';

describe('ProfileListRowComponent', () => {
  let component: ProfileListRowComponent;
  let fixture: ComponentFixture<ProfileListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
