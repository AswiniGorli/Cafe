import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojiticardsComponent } from './mojiticards.component';

describe('MojiticardsComponent', () => {
  let component: MojiticardsComponent;
  let fixture: ComponentFixture<MojiticardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MojiticardsComponent]
    });
    fixture = TestBed.createComponent(MojiticardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
