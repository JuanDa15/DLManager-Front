import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileOdontComponent } from './edit-profile-odont.component';

describe('EditProfileOdontComponent', () => {
  let component: EditProfileOdontComponent;
  let fixture: ComponentFixture<EditProfileOdontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileOdontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileOdontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
