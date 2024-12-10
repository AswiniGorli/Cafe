import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotcoffeecardsComponent } from './hotcoffeecards.component';

describe('HotcoffeecardsComponent', () => {
  let component: HotcoffeecardsComponent;
  let fixture: ComponentFixture<HotcoffeecardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotcoffeecardsComponent]
    });
    fixture = TestBed.createComponent(HotcoffeecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
