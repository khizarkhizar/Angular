import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotaComponent } from './mota.component';

describe('MotaComponent', () => {
  let component: MotaComponent;
  let fixture: ComponentFixture<MotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
