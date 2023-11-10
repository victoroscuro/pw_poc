import { expect } from '@playwright/test';
const utils = require('../resources/findSections');
import fs, { link } from 'fs';
const navigatioData = JSON.parse(fs.readFileSync('./data/navigation.json', 'utf-8'));

class HomePage  {
  constructor(page) {
    this.page = page;
  }

  async assertHomePage() {
    //other checks may needed
    await expect(this.page).toHaveTitle("Home - Liferay DXP");
    await expect(this.page.locator('#main-content img')).toBeVisible();
    await expect(this.page.getByLabel('Open Applications')).toBeEnabled();
  }

async navigateToPortlet(linkname) {
  await this.page.getByLabel('Open Applications').click();
  const navigationClicks = await utils.default(linkname, navigatioData);
  await this.page.getByRole('tab', { name: navigationClicks.maintab }).click();
  await this.page.getByRole('link', { name: linkname }).click();
}

};
export default HomePage