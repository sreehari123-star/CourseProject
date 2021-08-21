import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfhomeComponent } from './profhome.component';

describe('ProfhomeComponent', () => {
  let component: ProfhomeComponent;
  let fixture: ComponentFixture<ProfhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
