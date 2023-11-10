import { log } from 'console';
import test from '../testFixtures/fixture';
import { expect, request } from '@playwright/test';
import * as accounts from '../apis/accounts';
import fs from 'fs'
import MiniumCatalogPage from '../pages/miniumCatalogPage';
const accountsData = JSON.parse(fs.readFileSync('./data/accounts.json', 'utf-8'));

test('Simple Commerce test', async ({ page, request, loginPage, homePage, sitesPage, miniumCatalogPage }) => {
    let productToBuy = 'U-Joint';
    let miniumName = 'minium2';
   
    //log in to portal
    await loginPage.navigateToPortal();
    await loginPage.doLogin();

    //assert home page is correct
    await homePage.assertHomePage();
    
    //go to site and create a minium
    await homePage.navigateToPortlet('Sites');
    await sitesPage.createMinium(miniumName);

    //create an account via API
    await accounts.addAccountViaAPI(request, accountsData.accounts[0].name, accountsData.accounts[0].type); 

    //go to minium catalog and click on U-Joint product to add to cart
    await page.goto('http://localhost:8080/web/' + miniumName);
    await miniumCatalogPage.selectProductFromCatalogue(productToBuy);

    
});