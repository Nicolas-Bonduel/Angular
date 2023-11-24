import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicartItemsComponent } from './minicart-items.component';

describe('MinicartItemsComponent', () => {
  let component: MinicartItemsComponent;
  let fixture: ComponentFixture<MinicartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinicartItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinicartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
