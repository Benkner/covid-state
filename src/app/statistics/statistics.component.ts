import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from '../_classes/statistics';
import { LoadingService } from '../_services/loading.service';
import { StatisticsService } from '../_services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  statistics$: Observable<Statistics>;
  loading$: Observable<boolean>;

  constructor(
    private statisticsService: StatisticsService,
    private loadingService: LoadingService
  ) {
    this.statistics$ = this.statisticsService.getStatistics$();
    this.loading$ = this.loadingService.getLoading$();
  }

  ngOnInit(): void {
  }

}
