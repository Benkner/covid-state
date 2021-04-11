import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GermanyComponent } from './germany/germany.component';
import { MaterialModule } from './material/material.module';
import { StateComponent } from './state/state.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TimeSelectionComponent } from './time-selection/time-selection.component';
import { LoadingInterceptorService } from './_services/loading-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    GermanyComponent,
    TimeSelectionComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }