import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudacComponent } from './ayudac.component';

describe('AyudacComponent', () => {
  let component: AyudacComponent;
  let fixture: ComponentFixture<AyudacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
