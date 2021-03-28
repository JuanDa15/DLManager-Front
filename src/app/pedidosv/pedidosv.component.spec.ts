import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosvComponent } from './pedidosv.component';

describe('PedidosvComponent', () => {
  let component: PedidosvComponent;
  let fixture: ComponentFixture<PedidosvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
