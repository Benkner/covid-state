import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StatisticsComponent } from '../statistics/statistics.component';
import { TimeSelectionComponent } from '../time-selection/time-selection.component';
import { MaterialModule } from '../_layout/material/material.module';

import { GermanyComponent } from './germany.component';

describe('GermanyComponent', () => {
  let component: GermanyComponent;
  let fixture: ComponentFixture<GermanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        MaterialModule
      ],
      declarations: [
        GermanyComponent,
        StatisticsComponent,
        TimeSelectionComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
