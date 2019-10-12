import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolviComponent } from './molvi.component';

describe('MolviComponent', () => {
  let component: MolviComponent;
  let fixture: ComponentFixture<MolviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
