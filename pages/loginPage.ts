export class LoginPage {
  constructor(public page) {}

  async login(username: string, password: string) {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.click('[data-test="login-button"]');
  }
}
