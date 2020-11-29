import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'databinding';
  serverElements = [
    {
      type: 'server',
      name: 'testserver',
      content: 'just a test',
    },
  ];

  onServerAdded(serverData: {
    serverName: string;
    serverContent: string;
  }): void {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }): void {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}
