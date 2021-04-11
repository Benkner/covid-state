import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AreaType } from '../_classes/areaType';
import { State } from '../_classes/state';
import { StoreService } from '../_services/store.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  states: State[] = [];
  stateSelected: State | undefined;

  constructor(
    private store: StoreService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.store.setAreaTypeSelected(AreaType.State);

    this.api.getStateList().subscribe(
      result => {
        this.states = result;

        // Set first state available
        if (this.stateSelected === undefined && this.states.length > 0) {
          this.setSelectedState(this.states[0]);
        }
      });

    this.store.getStateSelected$().subscribe(
      state => {
        this.stateSelected = state;
      });
  }

  setSelectedState(state: State): void {
    this.store.setStateSelected(state);
  }

  /** Compare for objects in dropdown. */
  compareState(obj1?: State, obj2?: State): boolean {
    if (obj1 === undefined || obj2 === undefined) {
      return false;
    }
    return obj1.id === obj2.id;
  }

}
