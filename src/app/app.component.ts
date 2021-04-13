import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationService } from './location/location.service';
import { LoadingService } from './_services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Covid-State';
  loading$: Observable<boolean>;

  tabItems = [
    { label: 'Germany', path: 'germany' },
    { label: 'State', path: 'state' }
  ];

  constructor(
    private loadingService: LoadingService,
    private initEarly: LocationService
  ) {
    this.loading$ = this.loadingService.getLoading$();
  }

}
