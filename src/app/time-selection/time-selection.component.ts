import { Component, OnInit } from '@angular/core';
import { StoreService } from '../_services/store.service';

@Component({
  selector: 'app-time-selection',
  templateUrl: './time-selection.component.html',
  styleUrls: ['./time-selection.component.scss']
})
export class TimeSelectionComponent implements OnInit {
  weeksSelected = 1;

  constructor(
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.store.getDaysSelected$()
      // TODO unsubscribe
      .subscribe(value => {
        this.weeksSelected = value / 7;
      });
  }

  setDays(): void {
    this.store.setDaysSelected(this.weeksSelected * 7);
  }

}
