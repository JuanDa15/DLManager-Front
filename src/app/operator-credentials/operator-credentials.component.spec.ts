import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorCredentialsComponent } from './operator-credentials.component';

describe('OperatorCredentialsComponent', () => {
  let component: OperatorCredentialsComponent;
  let fixture: ComponentFixture<OperatorCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorCredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
