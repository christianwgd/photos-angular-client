export class TokenAuth {
  public access: string;
  public refresh: string;
  public username: string;

  constructor(access: string, refresh: string, username: string) {
    this.access = access;
    this.refresh = refresh;
    this.username = username;
  }
}
