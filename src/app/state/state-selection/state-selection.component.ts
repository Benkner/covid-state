import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { State } from '../../_classes/state';
import { StoreService } from '../../_services/store.service';

@Component({
  selector: 'app-state-selection',
  templateUrl: './state-selection.component.html',
  styleUrls: ['./state-selection.component.scss']
})
export class StateSelectionComponent implements OnInit {
  states: State[] = [];
  stateSelected: State | undefined;

  constructor(
    private store: StoreService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api.getStateList().subscribe(
      result => {
        this.states = result;
      });

    this.store.getStateSelected$().subscribe(state => {
      this.stateSelected = state;
    });
  }

  setSelectedState(): void {
    this.store.setStateSelected(this.stateSelected);
  }

  /** Compare for objects in dropdown. */
  compareState(obj1?: State, obj2?: State): boolean {
    if (obj1 === undefined || obj2 === undefined) {
      return false;
    }
    return obj1.id === obj2.id;
  }
}
