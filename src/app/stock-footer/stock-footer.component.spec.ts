import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFooterComponent } from './stock-footer.component';

describe('StockFooterComponent', () => {
  let component: StockFooterComponent;
  let fixture: ComponentFixture<StockFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockFooterComponent]
    });
    fixture = TestBed.createComponent(StockFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
