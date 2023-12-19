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
};
export default MiniumCatalogPage;