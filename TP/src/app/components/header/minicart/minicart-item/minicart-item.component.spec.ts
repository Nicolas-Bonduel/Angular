import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicartItemComponent } from './minicart-item.component';

describe('MinicartItemComponent', () => {
  let component: MinicartItemComponent;
  let fixture: ComponentFixture<MinicartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinicartItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinicartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
