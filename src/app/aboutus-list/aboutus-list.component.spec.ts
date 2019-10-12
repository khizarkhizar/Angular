import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusListComponent } from './aboutus-list.component';

describe('AboutusListComponent', () => {
  let component: AboutusListComponent;
  let fixture: ComponentFixture<AboutusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
