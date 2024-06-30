import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankComponent } from './blank.component';

describe('BlankComponent', () => {
  let component: BlankComponent;
  let fixture: ComponentFixture<BlankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlankComponent]
    });
    fixture = TestBed.createComponent(BlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
