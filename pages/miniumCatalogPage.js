import { expect } from '@playwright/test';
import * as miniumCatalogPage from '../page-objects/miniumCatalogPage';
const utils = require('../resources/utils');

class MiniumCatalogPage {
  constructor(page) {
    this.page = page;
  }

  async selectProductFromCatalogue(productToBuy) {
    const locator = await utils.resolvePath(miniumCatalogPage.anyProductAddToCartButton, productToBuy);
    await this.page.locator(locator).click();
  }

  async checkAccountOnAccountSelector(accountName) {
    await expect(this.page.getByRole('button', { name: 'B2BAccount1' })).toContainText(accountName);
  }

  async checkProductInMiniCart(product) {
    await this.page.getByRole('button', { name: '1', exact: true }).click();
    await expect(this.page.getByRole('link', { name: 'thumbnail U-Joint MIN55861' })).toContainText(product);
  }
};
export default MiniumCatalogPage;