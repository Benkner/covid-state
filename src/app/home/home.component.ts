import { Component, OnInit } from '@angular/core';
import { ApiState } from '../api/api-state';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  states: ApiState[] = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getStateList$().subscribe(
      result => {
        this.states = result;
      },
      () => {

      });
  }

}
