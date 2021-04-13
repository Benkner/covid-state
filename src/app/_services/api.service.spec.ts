import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 16 state elements', (done) => {
    service.getStateList().subscribe(states => {
      expect(states.length).toEqual(16);
      expect(states[0].id).toEqual(jasmine.any(Number));
      expect(states[0].name).toEqual(jasmine.any(String));
      done();
    });
  });

  it('should return valid statistics for germany', (done) => {
    service.getHistoryGermany(2).subscribe(stats => {
      expect(stats.cases).toEqual(jasmine.any(Number));
      expect(stats.deaths).toEqual(jasmine.any(Number));
      expect(stats.recovered).toEqual(jasmine.any(Number));
      expect(stats.status).toEqual(jasmine.any(String));
      done();
    });
  });

  it('should return valid statistics for a state', (done) => {
    service.getHistoryState(2, 1).subscribe(stats => {
      expect(stats.cases).toEqual(jasmine.any(Number));
      expect(stats.deaths).toEqual(jasmine.any(Number));
      expect(stats.recovered).toEqual(jasmine.any(Number));
      expect(stats.status).toEqual(jasmine.any(String));
      done();
    });
  });
});
