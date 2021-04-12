import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatisticsComponent } from '../statistics/statistics.component';
import { TimeSelectionComponent } from '../time-selection/time-selection.component';
import { MaterialModule } from '../_layout/material/material.module';
import { StateComponent } from './state.component';


describe('StateComponent', () => {
  let component: StateComponent;
  let fixture: ComponentFixture<StateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MaterialModule
      ],
      declarations: [
        StatisticsComponent,
        TimeSelectionComponent,
        StateComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
