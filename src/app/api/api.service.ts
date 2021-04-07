import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from '../_classes/state';
import { Statistics } from '../_classes/statistics';
import { ResponseStates, ResponseStatistics } from './api-response-types';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly apiUrlRki = 'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?';

  constructor(
    private http: HttpClient
  ) { }

  getStateList(): Observable<State[]> {
    const url = this.apiUrlRki +
      "where=1%3D1" +
      "&outFields=Bundesland,IdBundesland" +
      "&returnDistinctValues=true" +
      "&f=json";
    return this.http.get<ResponseStates>(url)
      .pipe(map<ResponseStates, State[]>(x => x.features.map(a => {
        return { name: a.attributes.Bundesland, id: a.attributes.IdBundesland }
      })));
  }

  getDatenstand() {
    const url = this.apiUrlRki +
      "where=1%3D1" +
      "&outFields=Datenstand" +
      "&returnDistinctValues=true&outSR=4326&f=json";

    return this.http.get(url).pipe(map((x: any) => x.features[0].attributes.Datenstand));
  }

  germanyHistory(days: number): Observable<Statistics> {
    const outStatistics = [
      { 'statisticType': 'sum', 'onStatisticField': 'AnzahlFall', 'outStatisticFieldName': 'cases' },
      { 'statisticType': 'sum', 'onStatisticField': 'AnzahlTodesfall', 'outStatisticFieldName': 'deaths' },
      { 'statisticType': 'sum', 'onStatisticField': 'AnzahlGenesen', 'outStatisticFieldName': 'recovered' },
      { 'statisticType': 'min', 'onStatisticField': 'MeldeDatum', 'outStatisticFieldName': 'date' }];
    const url = this.apiUrlRki +
      "where=MeldeDatum >= CURRENT_TIMESTAMP - INTERVAL '" + (days + 1) + "' DAY" +
      " AND MeldeDatum <= CURRENT_TIMESTAMP - INTERVAL '1' DAY" +
      "&outStatistics=" + JSON.stringify(outStatistics) +
      "&f=json";
    return this.http.get<ResponseStatistics>(url).pipe(map(x => x.features[0].attributes));
  }
}
