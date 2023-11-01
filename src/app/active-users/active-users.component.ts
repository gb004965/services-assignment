import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {UserCounterService} from "../usercounter.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  activeCounter: number;

  constructor(private usersService: UsersService,
              private usercounterService: UserCounterService) {}

  ngOnInit(){
    this.users = this.usersService.activeUsers;
  }

  ngAfterContentChecked() {
    this.activeCounter = this.usercounterService.activeUserChangeCounter;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
