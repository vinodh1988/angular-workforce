import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDailogComponent } from './approve-dailog.component';

describe('ApproveDailogComponent', () => {
  let component: ApproveDailogComponent;
  let fixture: ComponentFixture<ApproveDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
