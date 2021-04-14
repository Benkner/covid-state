import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';

/** Intercepts traffic to get aware of current requests. */
@Injectable({ providedIn: 'root' })
export class LoadingInterceptorService implements HttpInterceptor {

  constructor(
    private loadingService: LoadingService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.addRequest(req);
    return next.handle(req)
      .pipe(finalize(() => {
        this.loadingService.removeRequest(req);
      }));
  }
}
