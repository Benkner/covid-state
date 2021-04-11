import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AreaType } from '../_classes/areaType';
import { State } from '../_classes/state';

/** Storing settings. */
@Injectable({ providedIn: 'root' })
export class StoreService {
  private areaTypeSelected: BehaviorSubject<AreaType> = new BehaviorSubject<AreaType>(AreaType.Country);
  private stateSelected: BehaviorSubject<State | undefined> = new BehaviorSubject<State | undefined>(undefined);
  private weeksSelected: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() { }

  getAreaTypeSelected$(): Observable<AreaType> {
    return this.areaTypeSelected.asObservable();
  }
  setAreaTypeSelected(areaType: AreaType): void {
    this.areaTypeSelected.next(areaType);
    // Save to settings
  }

  getStateSelected$(): Observable<State | undefined> {
    return this.stateSelected.asObservable();
  }
  setStateSelected(state: State | undefined): void {
    this.stateSelected.next(state);
    // Save to settings
  }

  getWeeksSelected$(): Observable<number> {
    return this.weeksSelected.asObservable();
  }
  setWeekSelected(days: number): void {
    this.weeksSelected.next(days);
    // Save to settings
  }
}
