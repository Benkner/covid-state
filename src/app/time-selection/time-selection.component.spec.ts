import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../_layout/material/material.module';

import { TimeSelectionComponent } from './time-selection.component';

describe('TimeSelectionComponent', () => {
  let component: TimeSelectionComponent;
  let fixture: ComponentFixture<TimeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule
      ],
      declarations: [TimeSelectionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
