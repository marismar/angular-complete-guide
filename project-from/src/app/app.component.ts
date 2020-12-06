import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project-from';
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(
        null,
        Validators.required,
        this.forbiddenName.bind(this)
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
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
          resolve({ nameIsForbidden: false });
        }
      }, 1500);
    });

    return promise;
  }
}
