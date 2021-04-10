import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Region } from '../_classes/region';
import { State } from '../_classes/state';

/** Storing the selected region globally. */
@Injectable({ providedIn: 'root' })
export class RegionService {
  areaSelected: Area = { type: AreaType.State, id: 0, name: 'Germany' };
  ar: BehaviorSubject<Area> = new BehaviorSubject<Area>(this.areaSelected);

  // regionSelected: Region = Region.Country;

  // states: State[] = [];
  // stateSelected?: State;

  constructor() { }

  getSelectedArea$(): Observable<Area> {
    return this.ar.asObservable();
  }
}

export type Area = {
  type: AreaType;
  id: number;
  name: string;
}

export enum AreaType {
  Country,
  State,
  District
}