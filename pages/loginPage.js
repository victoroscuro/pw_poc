import { expect } from '@playwright/test';
import fs from 'fs'
import * as loginPage from '../page-objects/loginPage';
const testData = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  //centralize elsewhere
  async navigateToPortal() {
    await this.page.goto("http://localhost:8080");
  }

  async doLogin() {
    await this.page.locator(loginPage.signinButton).click();
    await this.page.locator(loginPage.username).fill(testData.test.username);
    await this.page.locator(loginPage.password).fill(testData.test.password);
    await this.page.getByLabel('Sign In').getByRole('button', { name: 'Sign In' }).click();
  }
};
export default LoginPage