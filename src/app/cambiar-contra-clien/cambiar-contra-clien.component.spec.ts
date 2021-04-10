import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarContraClienComponent } from './cambiar-contra-clien.component';

describe('CambiarContraClienComponent', () => {
  let component: CambiarContraClienComponent;
  let fixture: ComponentFixture<CambiarContraClienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarContraClienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarContraClienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
