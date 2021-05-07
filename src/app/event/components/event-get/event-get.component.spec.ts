import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGetComponent } from './event-get.component';

describe('EventGetComponent', () => {
  let component: EventGetComponent;
  let fixture: ComponentFixture<EventGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
