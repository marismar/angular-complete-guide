import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

import { AuthService } from './auth.service';

interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponse>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (error) => {
        console.log(error);
        this.error = error;
        this.showErrorAlert(error);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    // const alertComp = new AlertComponent();
    /* const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    hostViewContainerRef.createComponent(alertCmpFactory); */
  }
}
