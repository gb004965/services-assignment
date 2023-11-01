import {Injectable} from "@angular/core";
import {UserCounterService} from "./usercounter.service";

@Injectable()
export class UsersService {

  constructor (private usercounterService: UserCounterService) {}

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.usercounterService.incrementInactiveUserCounter();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.usercounterService.incrementActiveUserCounter()
  }


}
