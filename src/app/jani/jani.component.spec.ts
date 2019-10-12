import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaniComponent } from './jani.component';

describe('JaniComponent', () => {
  let component: JaniComponent;
  let fixture: ComponentFixture<JaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
