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
  daysSelected = 7;

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
    this.store.getDaysSelected$().subscribe(value => {
      this.daysSelected = value;
      this.update();
    });
  }

  getStatistics$(): Observable<Statistics> {
    return this.statistics.asObservable();
  }

  private update(): void {
    if (this.areaTypeSelected === AreaType.State && this.stateSelected === undefined) {
      this.statistics.next({});
      console.log('invalid state..');
      // TODO
    } else {
      switch (this.areaTypeSelected) {
        case AreaType.Country:
          this.api.getHistoryGermany(this.daysSelected).subscribe(result => {
            this.statistics.next(result);
          });
          break;
        case AreaType.State:
          if (this.stateSelected !== undefined) {
            this.api.getHistoryState(this.daysSelected, this.stateSelected.id).subscribe(result => {
              this.statistics.next(result);
            });
          }
          break;
      }
    }
  }
}
