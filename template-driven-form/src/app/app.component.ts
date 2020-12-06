import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'template-driven-form';

  @ViewChild('form') form: NgForm;
  defaultOption = 'pet';
  answer = '';
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: '',
  };

  suggestUserName(): void {
    const suggestedName = 'superuser';
    // setValue() overwrite all inputs
    /* this.form.setValue({
      userData: {
        username: suggestedName,
        email: '',
      },
      secret: 'pet',
      question: '',
      gender: 'female',
    }); */

    // patchValue() dont overwrite filled inputs, but only empty one
    this.form.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.submitted = true;
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secret = this.form.value.secret;
    this.user.answer = this.form.value.answer;
    this.user.gender = this.form.value.gender;
    this.form.reset();
  }
}
