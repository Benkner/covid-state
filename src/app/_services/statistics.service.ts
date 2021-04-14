import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AreaType } from '../_classes/areaType';
import { State } from '../_classes/state';
import { Statistics } from '../_classes/statistics';
import { ApiService } from './api.service';
import { SnackService } from './snack.service';
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
    private store: StoreService,
    private snack: SnackService
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
    this.statistics.next({});
    switch (this.areaTypeSelected) {
      case AreaType.Country:
        this.api.getHistoryGermany(this.weeksSelected * 7).subscribe(
          result => {
            this.statistics.next(result);
          },
          () => {
            this.snack.show('Could not fetch statistics');
          });
        break;
      case AreaType.State:
        if (this.stateSelected !== undefined) {
          this.api.getHistoryState(this.weeksSelected * 7, this.stateSelected.id).subscribe(
            result => {
              this.statistics.next(result);
            },
            () => {
              this.snack.show('Could not fetch statistics');
            });
        }
        break;
    }
  }
}
