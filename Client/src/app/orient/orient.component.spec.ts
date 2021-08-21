import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientComponent } from './orient.component';

describe('OrientComponent', () => {
  let component: OrientComponent;
  let fixture: ComponentFixture<OrientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
