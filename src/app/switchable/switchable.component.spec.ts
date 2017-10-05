import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchableComponent } from './switchable.component';

describe('SwitchableComponent', () => {
  let component: SwitchableComponent;
  let fixture: ComponentFixture<SwitchableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
