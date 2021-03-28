import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatoreditclientsComponent } from './operatoreditclients.component';

describe('OperatoreditclientsComponent', () => {
  let component: OperatoreditclientsComponent;
  let fixture: ComponentFixture<OperatoreditclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatoreditclientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatoreditclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
