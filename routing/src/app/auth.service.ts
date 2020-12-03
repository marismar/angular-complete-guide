import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  constructor() {}

  isAuthenticated(): Promise<unknown> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });

    return promise;
  }

  login(): void {
    this.loggedIn = true;
    console.log(this.loggedIn);
  }

  logout(): void {
    this.loggedIn = false;
    console.log(this.loggedIn);
  }
}
