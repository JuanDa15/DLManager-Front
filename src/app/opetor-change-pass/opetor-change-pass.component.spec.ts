import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpetorChangePassComponent } from './opetor-change-pass.component';

describe('OpetorChangePassComponent', () => {
  let component: OpetorChangePassComponent;
  let fixture: ComponentFixture<OpetorChangePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpetorChangePassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpetorChangePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
