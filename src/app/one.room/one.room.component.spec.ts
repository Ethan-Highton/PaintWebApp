import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRoomComponent } from './one.room.component';

describe('OneRoomComponent', () => {
  let component: OneRoomComponent;
  let fixture: ComponentFixture<OneRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneRoomComponent]
    });
    fixture = TestBed.createComponent(OneRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
