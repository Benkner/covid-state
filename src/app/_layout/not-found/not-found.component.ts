import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Showing 404 information with possibility to return to main page. */
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  home(): void {
    this.router.navigate(['/']);
  }

}
