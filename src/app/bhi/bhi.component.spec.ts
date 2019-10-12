import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhiComponent } from './bhi.component';

describe('BhiComponent', () => {
  let component: BhiComponent;
  let fixture: ComponentFixture<BhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
