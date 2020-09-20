import { Component } from "@angular/core";
import { UsersService } from "./users.service";
import { OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  count: number;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.updateCount.subscribe((count) => (this.count = count));
  }
}
