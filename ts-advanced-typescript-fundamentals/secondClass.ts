class User {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  setUsername(username: string) {
    this.username = username;
  }
}

const user = new User("zalypa");

const u = user.username.toLocaleLowerCase();
console.log(u);
