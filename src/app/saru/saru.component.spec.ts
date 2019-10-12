import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaruComponent } from './saru.component';

describe('SaruComponent', () => {
  let component: SaruComponent;
  let fixture: ComponentFixture<SaruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
