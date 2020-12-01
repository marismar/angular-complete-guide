import { Component, OnInit } from '@angular/core';

import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
})
export class NewAccountComponent implements OnInit {
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    // subscribe() is a handler to the event
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert(`New status: ${status}`)
    );
  }

  ngOnInit(): void {}

  onCreateAccount(accountName: string, accountStatus: string): void {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
