import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverduebooksComponent } from './overduebooks.component';

describe('OverduebooksComponent', () => {
  let component: OverduebooksComponent;
  let fixture: ComponentFixture<OverduebooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverduebooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverduebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
