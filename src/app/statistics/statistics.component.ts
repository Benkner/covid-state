import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Statistics } from '../_classes/statistics';
import { StatisticsService } from '../_services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  statistics$: Observable<Statistics> = from([{}]);

  constructor(
    private statisticsService: StatisticsService
  ) { }

  ngOnInit(): void {
    this.statistics$ = this.statisticsService.getStatistics$();
  }

}
