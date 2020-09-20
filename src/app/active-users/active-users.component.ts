import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent implements OnInit {
  users: { name: string; active: boolean }[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.users.filter((user) => user.active === true);
    this.usersService.updateUsers.subscribe(
      (users) => (this.users = users.filter((user) => user.active === true))
    );
  }
  onSetToInactive(name: string) {
    this.usersService.toggleActive(name);
  }
}
