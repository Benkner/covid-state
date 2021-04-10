import { Component, OnInit } from '@angular/core';
import { AreaType } from '../_classes/areaType';
import { StoreService } from '../_services/store.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  constructor(
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.store.setAreaTypeSelected(AreaType.State);
  }

}
