import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninListComponent } from './signin-list.component';

describe('SigninListComponent', () => {
  let component: SigninListComponent;
  let fixture: ComponentFixture<SigninListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
