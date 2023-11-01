import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {UserCounterService} from "../usercounter.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  inactiveUserCounter = 0;

  constructor(private usersService: UsersService,
              private usercounterService: UserCounterService) {
  }

  ngOnInit(){
    this.users = this.usersService.inactiveUsers;
  }

  ngAfterContentChecked() {
    this.inactiveUserCounter = this.usercounterService.inactiveUserChangeCounter;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
