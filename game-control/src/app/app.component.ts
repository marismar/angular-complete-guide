import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'game-control';

  oddNums: number[] = [];
  evenNums: number[] = [];

  onIntervalFired(fireNumber: number): void {
    fireNumber % 2 === 0
      ? this.evenNums.push(fireNumber)
      : this.oddNums.push(fireNumber);
  }
}
