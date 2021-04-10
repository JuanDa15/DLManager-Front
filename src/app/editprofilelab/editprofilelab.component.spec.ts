import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilelabComponent } from './editprofilelab.component';

describe('EditprofilelabComponent', () => {
  let component: EditprofilelabComponent;
  let fixture: ComponentFixture<EditprofilelabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofilelabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofilelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
