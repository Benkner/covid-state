import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../_services/store.service';

@Component({
  selector: 'app-time-selection',
  templateUrl: './time-selection.component.html',
  styleUrls: ['./time-selection.component.scss']
})
export class TimeSelectionComponent implements OnInit {
  weeksSelected$: Observable<number>;

  constructor(
    private store: StoreService
  ) {
    this.weeksSelected$ = this.store.getWeeksSelected$();
  }

  ngOnInit(): void {
  }

  setWeeks(weeks: number | null): void {
    if (weeks !== null) {
      this.store.setWeekSelected(weeks);
    }
  }
}
