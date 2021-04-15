import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { InfoComponent } from 'src/app/info/info.component';
import { LoadingService } from 'src/app/_services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  loading$: Observable<boolean>;

  constructor(
    private loadingService: LoadingService,
    private dialog: MatDialog
  ) {
    this.loading$ = this.loadingService.getLoading$();
  }

  ngOnInit(): void {
  }

  showInfo(): void {
    this.dialog.open(InfoComponent);
  }

}
