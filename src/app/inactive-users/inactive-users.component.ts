import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: { name: string; active: boolean }[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.users.filter(
      (user) => user.active === false
    );
    this.usersService.updateUsers.subscribe(
      (users) => (this.users = users.filter((user) => user.active === false))
    );
  }
  onSetToActive(name: string) {
    this.usersService.toggleActive(name);
  }
}
