import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerhistoryComponent } from './managerhistory.component';

describe('ManagerhistoryComponent', () => {
  let component: ManagerhistoryComponent;
  let fixture: ComponentFixture<ManagerhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
