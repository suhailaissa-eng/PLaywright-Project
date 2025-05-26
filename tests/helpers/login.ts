import { LoginPage } from '../../pages/loginPage';
import dotenv from 'dotenv';
dotenv.config();

export async function login(page) {
  const loginPage = new LoginPage(page);

  const username = process.env.SAUCEDEMO_USER;
  const password = process.env.SAUCEDEMO_PASS;

  if (!username || !password) {
    throw new Error("Username or Password is undefined. Check your .env file.");
  }

  await loginPage.login(username, password);
}
