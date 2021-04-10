import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercompracComponent } from './vercomprac.component';

describe('VercompracComponent', () => {
  let component: VercompracComponent;
  let fixture: ComponentFixture<VercompracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercompracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VercompracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
