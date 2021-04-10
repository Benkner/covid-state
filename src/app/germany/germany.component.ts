import { Component, OnInit } from '@angular/core';
import { AreaType } from '../_classes/areaType';
import { StoreService } from '../_services/store.service';

@Component({
  selector: 'app-germany',
  templateUrl: './germany.component.html',
  styleUrls: ['./germany.component.scss']
})
export class GermanyComponent implements OnInit {

  constructor(
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.store.setAreaTypeSelected(AreaType.Country);
  }

}
