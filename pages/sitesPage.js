import { expect } from '@playwright/test';

class SitesPage {
  constructor(page) {
    this.page = page;
  }

  async createMinium(miniumName) {
    if(await this.page.getByRole('link', { name: miniumName }).count() < 1) {
     {
        await this.page.getByLabel('Add Site').click();
        await this.page.getByRole('button', { name: 'Select Template: Minium', exact: true }).click();
        await this.page.frameLocator('iframe[title="Add Site"]').getByLabel('Name').fill(miniumName);
        await this.page.frameLocator('iframe[title="Add Site"]').getByLabel('Name').click();
        await this.page.frameLocator('iframe[title="Add Site"]').getByRole('button', { name: 'Add' }).click();
        await expect(this.page.frameLocator('iframe[title="Add Site"]').getByText('The creation of the site may take some time. Closing the window will not cancel')).toBeHidden({ timeout: 40000 });
        await expect(this.page.getByRole('heading', { name: 'Site Settings' })).toBeVisible({ timeout: 15000 });
        await expect(this.page.getByRole('link', { name: 'Catalog' })).toBeVisible();
    }
  }
}
};
export default SitesPage;
