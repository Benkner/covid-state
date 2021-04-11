import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { AreaType } from '../_classes/areaType';
import { State } from '../_classes/state';
import { Statistics } from '../_classes/statistics';
import { StoreService } from './store.service';

/** Updating the statistics. */
@Injectable({ providedIn: 'root' })
export class StatisticsService {
  areaTypeSelected: AreaType = AreaType.Country;
  stateSelected?: State;
  weeksSelected = 1;

  statistics = new BehaviorSubject<Statistics>({});

  constructor(
    private api: ApiService,
    private store: StoreService
  ) {
    this.store.getAreaTypeSelected$().subscribe(value => {
      this.areaTypeSelected = value;
      this.update();
    });
    this.store.getStateSelected$().subscribe(value => {
      this.stateSelected = value;
      this.update();
    });
    this.store.getWeeksSelected$().subscribe(value => {
      this.weeksSelected = value;
      this.update();
    });
  }

  getStatistics$(): Observable<Statistics> {
    return this.statistics.asObservable();
  }

  private update(): void {
    switch (this.areaTypeSelected) {
      case AreaType.Country:
        this.api.getHistoryGermany(this.weeksSelected * 7).subscribe(result => {
          this.statistics.next(result);
        });
        break;
      case AreaType.State:
        if (this.stateSelected !== undefined) {
          this.api.getHistoryState(this.weeksSelected * 7, this.stateSelected.id).subscribe(result => {
            this.statistics.next(result);
          });
        } else {
          this.statistics.next({});
        }
        break;
    }
  }
}
