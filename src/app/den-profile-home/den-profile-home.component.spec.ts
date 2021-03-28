import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenProfileHomeComponent } from './den-profile-home.component';

describe('DenProfileHomeComponent', () => {
  let component: DenProfileHomeComponent;
  let fixture: ComponentFixture<DenProfileHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenProfileHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
