import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './_services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-state';
  loading$: Observable<boolean>;

  tabItems = [
    { label: 'Germany', path: 'germany' },
    { label: 'State', path: 'state' }
  ];

  constructor(
    private loadingService: LoadingService
  ) {
    this.loading$ = this.loadingService.getLoading$();
  }

}
