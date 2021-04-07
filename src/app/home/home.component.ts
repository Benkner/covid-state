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
  region: Region = Region.Country;
  /** Variable for accessing enum in template */
  readonly regionEnum: typeof Region = Region;

  states: State[] = [];
  stateSelected?: State;

  daysSelected = 7;
  datasetDate?: string;
  statistics: Statistics | undefined

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

    this.api.getDatenstand().subscribe(result => {
      this.datasetDate = result;
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
    this.api.germanyHistory(this.daysSelected).subscribe(result => {
      this.statistics = result;
    });
  }

}
