import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdcoffeedetailsComponent } from './coldcoffeedetails.component';

describe('ColdcoffeedetailsComponent', () => {
  let component: ColdcoffeedetailsComponent;
  let fixture: ComponentFixture<ColdcoffeedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColdcoffeedetailsComponent]
    });
    fixture = TestBed.createComponent(ColdcoffeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
