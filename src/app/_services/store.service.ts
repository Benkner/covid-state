import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AreaType } from '../_classes/areaType';
import { State } from '../_classes/state';

/** Storing settings. */
@Injectable({ providedIn: 'root' })
export class StoreService {
  private areaTypeSelected: BehaviorSubject<AreaType> = new BehaviorSubject<AreaType>(AreaType.Country);
  private stateSelected: BehaviorSubject<State | undefined> = new BehaviorSubject<State | undefined>(undefined);
  private daysSelected: BehaviorSubject<number> = new BehaviorSubject<number>(7);

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

  getDaysSelected$(): Observable<number> {
    return this.daysSelected.asObservable();
  }
  setDaysSelected(days: number): void {
    this.daysSelected.next(days);
    // Save to settings
  }
}
