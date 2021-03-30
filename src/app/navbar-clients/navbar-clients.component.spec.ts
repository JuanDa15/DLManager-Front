import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarClientsComponent } from './navbar-clients.component';

describe('NavbarClientsComponent', () => {
  let component: NavbarClientsComponent;
  let fixture: ComponentFixture<NavbarClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
