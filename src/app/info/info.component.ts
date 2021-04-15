import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from '../_classes/statistics';
import { StatisticsService } from '../_services/statistics.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  statistics$: Observable<Statistics>;

  constructor(
    private statistics: StatisticsService
  ) {
    this.statistics$ = this.statistics.getStatistics$();
  }

  ngOnInit(): void {
  }

}
