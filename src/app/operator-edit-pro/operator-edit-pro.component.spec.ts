import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorEditProComponent } from './operator-edit-pro.component';

describe('OperatorEditProComponent', () => {
  let component: OperatorEditProComponent;
  let fixture: ComponentFixture<OperatorEditProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorEditProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorEditProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
