import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId = 10;
  serverName = '';
  serverStatus = '';
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverCreated = false;

  username = '';

  display = false;
  items = [1, 2, 3, 4, 5];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    console.log(this.serverStatus);
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  onCreateServer(): void {
    console.log('Server was created');
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverCreationStatus = `New server was created! His name is ${this.serverName}`;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onResetUsername(): void {
    this.username = '';
  }

  allowUpdateUsername(): boolean {
    return this.username === '';
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
