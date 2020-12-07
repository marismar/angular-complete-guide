import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project-form';

  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [this.forbiddenName.bind(this)],
        updateOn: 'blur',
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      status: new FormControl('stable'),
    });
  }

  onSubmit(): void {
    console.log(this.projectForm);
  }

  forbiddenName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
