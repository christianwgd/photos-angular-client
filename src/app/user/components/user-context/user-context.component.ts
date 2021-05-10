import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-context',
  templateUrl: './user-context.component.html',
  styleUrls: ['./user-context.component.css']
})
export class UserContextComponent implements OnInit {

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
      const userAuth = JSON.parse(sessionStorage.getItem('userAuth'));
      if (userAuth) {
        this.userService.getUserByUsername(userAuth.username).subscribe(user => {
          this.user = user;
        })
      }
    })
  }
}
