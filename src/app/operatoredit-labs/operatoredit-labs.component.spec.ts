import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatoreditLabsComponent } from './operatoredit-labs.component';

describe('OperatoreditLabsComponent', () => {
  let component: OperatoreditLabsComponent;
  let fixture: ComponentFixture<OperatoreditLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatoreditLabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatoreditLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
