import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SnackService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  /** Shows a simple message. */
  show(msg: string): void {
    this.snackBar.open(msg);
  }
}
