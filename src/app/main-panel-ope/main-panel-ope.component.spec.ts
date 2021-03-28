import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPanelOpeComponent } from './main-panel-ope.component';

describe('MainPanelOpeComponent', () => {
  let component: MainPanelOpeComponent;
  let fixture: ComponentFixture<MainPanelOpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPanelOpeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPanelOpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
