import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AreaType } from '../_classes/areaType';
import { State } from '../_classes/state';

/** Storing settings. */
@Injectable({ providedIn: 'root' })
export class StoreService {
  private readonly LOCAL_STORAGE_STATE = 'setting_covid_state';
  private readonly LOCAL_STORAGE_WEEKS = 'setting_covid_weeks';

  private areaTypeSelected: BehaviorSubject<AreaType> = new BehaviorSubject<AreaType>(AreaType.Country);
  private stateSelected: BehaviorSubject<State | undefined> = new BehaviorSubject<State | undefined>(undefined);
  private weeksSelected: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() {
    this.loadConfig();
  }

  getAreaTypeSelected$(): Observable<AreaType> {
    return this.areaTypeSelected.asObservable();
  }
  setAreaTypeSelected(areaType: AreaType): void {
    this.areaTypeSelected.next(areaType);
  }

  getStateSelected$(): Observable<State | undefined> {
    return this.stateSelected.asObservable();
  }
  setStateSelected(state: State | undefined): void {
    this.stateSelected.next(state);
    localStorage.setItem(this.LOCAL_STORAGE_STATE, JSON.stringify(state));
  }

  getWeeksSelected$(): Observable<number> {
    return this.weeksSelected.asObservable();
  }
  setWeekSelected(weeks: number): void {
    this.weeksSelected.next(weeks);
    localStorage.setItem(this.LOCAL_STORAGE_WEEKS, weeks.toString())
  }

  private loadConfig() {
    const weeks = localStorage.getItem(this.LOCAL_STORAGE_WEEKS);
    if (weeks !== null) {
      this.weeksSelected.next(Number(weeks));
    }

    const state = localStorage.getItem(this.LOCAL_STORAGE_STATE);
    if (state !== null) {
      this.stateSelected.next(JSON.parse(state));
    }
  }
}
