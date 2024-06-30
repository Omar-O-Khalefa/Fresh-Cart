import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategdetailsComponent } from './CategdetailsComponent';

describe('CategdetailsComponent', () => {
  let component: CategdetailsComponent;
  let fixture: ComponentFixture<CategdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CategdetailsComponent]
    });
    fixture = TestBed.createComponent(CategdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
