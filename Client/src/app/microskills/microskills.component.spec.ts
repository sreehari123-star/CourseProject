import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroskillsComponent } from './microskills.component';

describe('MicroskillsComponent', () => {
  let component: MicroskillsComponent;
  let fixture: ComponentFixture<MicroskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
