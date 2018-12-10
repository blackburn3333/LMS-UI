import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookborrowandreturnComponent } from './bookborrowandreturn.component';

describe('BookborrowandreturnComponent', () => {
  let component: BookborrowandreturnComponent;
  let fixture: ComponentFixture<BookborrowandreturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookborrowandreturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookborrowandreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
