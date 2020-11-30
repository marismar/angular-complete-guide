import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-app';
  page = 'recipes';

  onSelectedPage(page: string): void {
    this.page = page;
  }
}
