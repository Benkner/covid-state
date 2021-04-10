import { Injectable } from '@angular/core';
import { Region } from '../_classes/region';
import { State } from '../_classes/state';

/** Storing the selected region globally. */
@Injectable({ providedIn: 'root' })
export class RegionService {
  regionSelected: Region = Region.Country;

  states: State[] = [];
  stateSelected?: State;

  constructor() { }
}
