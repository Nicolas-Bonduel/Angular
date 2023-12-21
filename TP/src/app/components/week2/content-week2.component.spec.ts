import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWeek2Component } from './content-week2.component';

describe('ContentWeek2Component', () => {
  let component: ContentWeek2Component;
  let fixture: ComponentFixture<ContentWeek2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentWeek2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentWeek2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
