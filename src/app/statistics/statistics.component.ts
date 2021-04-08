import { Component, Input, OnInit } from '@angular/core';
import { Statistics } from '../_classes/statistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input() statistics?: Statistics;

  constructor() { }

  ngOnInit(): void {
  }

}
