import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuttyeListComponent } from './chuttye-list.component';

describe('ChuttyeListComponent', () => {
  let component: ChuttyeListComponent;
  let fixture: ComponentFixture<ChuttyeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuttyeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuttyeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
