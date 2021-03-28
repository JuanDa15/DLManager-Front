import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsVComponent } from './clients-v.component';

describe('ClientsVComponent', () => {
  let component: ClientsVComponent;
  let fixture: ComponentFixture<ClientsVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
