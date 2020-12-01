import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {}

  setToInactive(id: number): void {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);

    this.counterService.incrementActiveToInactive();
  }

  setToActive(id: number): void {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

    this.counterService.incrementInactiveToActive();
  }
}
