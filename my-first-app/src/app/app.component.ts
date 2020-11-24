import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = `I'm in the AppComponent`;
  name = 'server';
  servers = ['server'];

  onAddServer(): void {
    this.servers.push(this.name);
  }
}
