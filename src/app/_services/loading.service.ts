import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/** Handles global loading information. */
@Injectable({ providedIn: 'root' })
export class LoadingService {
  private requests: any[] = [];
  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  /** Indicates if http requests are active. */
  getLoading$(): Observable<boolean> {
    return this.loading.asObservable();
  }

  addRequest(request: any) {
    this.requests.push(request);
    this.nextOnChange(this.loading, true);
  }

  removeRequest(request: any) {
    this.requests = this.requests.filter(x => x !== request);
    if (this.requests.length === 0) {
      this.nextOnChange(this.loading, false);
    }
  }

  /** Next a subject only on change. */
  private nextOnChange(subject: BehaviorSubject<boolean>, newValue: boolean) {
    if (subject.value !== newValue) {
      subject.next(newValue);
    }
  }
}
