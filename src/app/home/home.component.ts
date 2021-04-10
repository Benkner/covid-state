import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Region } from '../_classes/region';
import { State } from '../_classes/state';
import { Statistics } from '../_classes/statistics';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /** Variable for accessing enum in template */
  readonly regionEnum: typeof Region = Region;
  states: State[] = [];

  regionSelected: Region = Region.Country;
  stateSelected?: State;
  weeksSelected = 1;

  statistics: Statistics | undefined;

  constructor(
    private api: ApiService
  ) {
    this.updateStatistics();
  }

  ngOnInit(): void {
    this.api.getStateList().subscribe(
      result => {
        this.states = result;
      });
  }

  /** Compare for objects in dropdown. */
  compareState(obj1?: State, obj2?: State): boolean {
    if (obj1 === undefined || obj2 === undefined) {
      return false;
    }
    return obj1.id === obj2.id;
  }

  /** Update statistics for selected values. */
  updateStatistics(): void {
    this.statistics = undefined;
    switch (this.regionSelected) {
      case Region.Country:
        this.api.getHistoryGermany(this.weeksSelected * 7).subscribe(result => {
          this.statistics = result;
        });
        break;
      case Region.State:
        if (this.stateSelected !== undefined) {
          this.api.getHistoryState(this.weeksSelected * 7, this.stateSelected?.id).subscribe(result => {
            this.statistics = result;
          });
        } else {
          console.log('show snack: select region');
        }
        break;
    }
  }
}
