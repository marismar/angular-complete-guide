import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    /* this.firstObsSubscription = interval(1000).subscribe((count) => {
      console.log(count);
    }); */

    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count); // emits a event with a value
        if (count === 5) {
          observer.complete(); // ends the observable
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!')); // at this condition the observer died
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data: number) => data > 0),
        map((data: number) => {
          return `Round: ${data + 1}`;
        })
      )
      .subscribe(
        (data) => {
          /* console.log(`Round: ${data + 1}`); */
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
