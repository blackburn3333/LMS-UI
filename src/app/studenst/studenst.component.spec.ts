import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenstComponent } from './studenst.component';

describe('StudenstComponent', () => {
  let component: StudenstComponent;
  let fixture: ComponentFixture<StudenstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
