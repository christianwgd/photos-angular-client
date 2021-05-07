import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {

  @Input() userUrl: string;

  user: User;
  private route: ActivatedRoute;
  private userService: UserService;

  constructor(userService: UserService, route: ActivatedRoute) {
    this.route = route;
    this.userService = userService;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userService.getUser(this.userUrl).subscribe(user => {
        this.user = user;
      })
    })
  }

}
