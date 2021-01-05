import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfmhistoryComponent } from './wfmhistory.component';

describe('WfmhistoryComponent', () => {
  let component: WfmhistoryComponent;
  let fixture: ComponentFixture<WfmhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfmhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfmhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
