import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  users: { name: string; active: boolean }[] = [
    { name: "Max", active: true },
    { name: "Anna", active: true },
    { name: "Chris", active: false },
    { name: "Manu", active: false },
  ];
  constructor() {}

  updateUsers = new EventEmitter();

  count: number = 0;
  updateCount = new EventEmitter<number>();

  toggleActive(name: string) {
    this.users.find((user) => user.name === name).active = !this.users.find(
      (user) => user.name === name
    ).active;
    this.updateUsers.emit(this.users);
    this.updateCount.emit(++this.count);
  }
}
