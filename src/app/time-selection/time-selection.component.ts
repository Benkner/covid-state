import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { StoreService } from '../_services/store.service';

@Component({
  selector: 'app-time-selection',
  templateUrl: './time-selection.component.html',
  styleUrls: ['./time-selection.component.scss']
})
export class TimeSelectionComponent implements OnInit {
  weeksSelected$: Observable<number> = from([1]);

  constructor(
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.weeksSelected$ = this.store.getWeeksSelected$();
  }

  setWeeks(weeks: number | null): void {
    if (weeks !== null)
      this.store.setWeekSelected(weeks);
  }
}
