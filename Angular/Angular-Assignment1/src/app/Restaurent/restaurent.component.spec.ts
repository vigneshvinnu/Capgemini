import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentComponent } from './restaurent.component';

describe('RestaurantComponent', () => {
  let component: RestaurentComponent;
  let fixture: ComponentFixture<RestaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});