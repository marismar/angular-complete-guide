import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'services';

  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  onAccountAdded(newAccount: { name: string; status: string }): void {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: { id: number; newStatus: string }): void {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
