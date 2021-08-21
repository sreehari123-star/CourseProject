import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsigninComponent } from './mentorsignin.component';

describe('MentorsigninComponent', () => {
  let component: MentorsigninComponent;
  let fixture: ComponentFixture<MentorsigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorsigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
