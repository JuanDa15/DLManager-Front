import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabProfileHomeComponent } from './lab-profile-home.component';

describe('LabProfileHomeComponent', () => {
  let component: LabProfileHomeComponent;
  let fixture: ComponentFixture<LabProfileHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabProfileHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
