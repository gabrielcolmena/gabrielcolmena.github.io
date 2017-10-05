import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterScreenComponent } from './router-screen.component';

describe('RouterScreenComponent', () => {
  let component: RouterScreenComponent;
  let fixture: ComponentFixture<RouterScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
