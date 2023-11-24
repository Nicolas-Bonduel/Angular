import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductSearchComponent } from './form-product-search.component';

describe('FormProductSearchComponent', () => {
  let component: FormProductSearchComponent;
  let fixture: ComponentFixture<FormProductSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormProductSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
