import { HttpClientModule } from '@angular/common/http';
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
import { MaterialModule } from './layout/material/material.module';
import { StateSelectionComponent } from './state/state-selection/state-selection.component';
import { StateComponent } from './state/state.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TimeSelectionComponent } from './time-selection/time-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    GermanyComponent,
    TimeSelectionComponent,
    StateComponent,
    StateSelectionComponent,
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
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
