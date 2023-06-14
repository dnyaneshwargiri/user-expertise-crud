import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkHistoryComponent } from './update-work-history.component';

describe('UpdateWorkHistoryComponent', () => {
  let component: UpdateWorkHistoryComponent;
  let fixture: ComponentFixture<UpdateWorkHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWorkHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
