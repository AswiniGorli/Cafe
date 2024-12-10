import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdcoffeecardsComponent } from './coldcoffeecards.component';

describe('ColdcoffeecardsComponent', () => {
  let component: ColdcoffeecardsComponent;
  let fixture: ComponentFixture<ColdcoffeecardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColdcoffeecardsComponent]
    });
    fixture = TestBed.createComponent(ColdcoffeecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
