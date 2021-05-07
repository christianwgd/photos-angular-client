import {last} from "rxjs/operators";

export class User {
  public id: number;
  public username: string;
  public full_name: string;
  public email: string;

  constructor(id: number, username: string, full_name: string, email: string) {
    this.id = id;
    this.username = username;
    this.full_name = full_name;
    this.email = email;
  }
}
