import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'subscription-form';

  @ViewChild('form') form: NgForm;
  defaultOption = 'advanced';

  onSubmit(): void {
    console.log(this.form);
  }
}
