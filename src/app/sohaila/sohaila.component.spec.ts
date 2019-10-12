import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SohailaComponent } from './sohaila.component';

describe('SohailaComponent', () => {
  let component: SohailaComponent;
  let fixture: ComponentFixture<SohailaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SohailaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SohailaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
