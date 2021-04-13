import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocationService {

  constructor() {

    navigator.geolocation.getCurrentPosition(position => {
      console.log('Position:', position.coords);

      // Google Maps API needs api key:
      // http://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224 ,-73.961452&sensor=false
    });
  }
}
