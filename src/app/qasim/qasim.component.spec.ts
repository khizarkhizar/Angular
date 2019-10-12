import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QasimComponent } from './qasim.component';

describe('QasimComponent', () => {
  let component: QasimComponent;
  let fixture: ComponentFixture<QasimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QasimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QasimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
