import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOperatorComponent } from './form-operator.component';

describe('FormOperatorComponent', () => {
  let component: FormOperatorComponent;
  let fixture: ComponentFixture<FormOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
