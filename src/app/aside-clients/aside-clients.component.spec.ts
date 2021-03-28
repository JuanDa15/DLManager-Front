import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideClientsComponent } from './aside-clients.component';

describe('AsideClientsComponent', () => {
  let component: AsideClientsComponent;
  let fixture: ComponentFixture<AsideClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
