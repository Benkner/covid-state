import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ApiResult } from './api-data';
import { ApiState } from './api-state';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly apiUrl = 'https://api.corona-zahlen.org/';

  constructor(
    private http: HttpClient
  ) { }

  /** Get a list of all available states. */
  getStateList$(): Observable<ApiState[]> {
    const sub = new ReplaySubject<ApiState[]>(1);
    const states: ApiState[] = [];
    this.http.get<ApiResult>(this.apiUrl + 'states').subscribe(
      result => {
        Object.keys(result.data).forEach(key => {
          const entry = result.data[key];
          states.push({ abbreviation: key, name: entry.name, id: entry.id });
        });
        sub.next(states);
        sub.complete();
      },
      () => {
        sub.error('Could not get states.');
      });
    return sub.asObservable();
  }
}
