import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHeaderComponent } from './header.component';

describe('StockHeaderComponent', () => {
  let component: StockHeaderComponent;
  let fixture: ComponentFixture<StockHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockHeaderComponent]
    });
    fixture = TestBed.createComponent(StockHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
