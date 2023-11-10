import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByLabel('Email Address').click();
  await page.getByLabel('Email Address').press('Meta+ArrowLeft');
  await page.getByLabel('Email Address').fill('test@liferay.com');
  await page.getByLabel('Email Address').press('Tab');
  await page.getByLabel('Password').fill('test');
  await page.getByLabel('Sign In- Loading').getByRole('button', { name: 'Sign In' }).click();
  await page.getByLabel('Open Applications Menu').click();
  await page.getByRole('tab', { name: 'Commerce' }).click();
  /*await page.getByRole('tab', { name: 'Control Panel' }).click();
  await page.getByRole('link', { name: 'Sites' }).click();
  await page.getByLabel('Add Site').click();
  await page.getByRole('button', { name: 'Select Template: Minium', exact: true }).click();
  await page.frameLocator('iframe[title="Add Site"]').getByLabel('Name\n\n\t\t\t\n\t\t\t\t\n\n\t\t\t\tRequired').click();
  await page.frameLocator('iframe[title="Add Site"]').getByLabel('Name\n\n\t\t\t\n\t\t\t\t\n\n\t\t\t\tRequired').fill('minium');
  await page.frameLocator('iframe[title="Add Site"]').getByRole('button', { name: 'Add' }).click();
  await page.goto('http://localhost:8080/group/minium/~/control_panel/manage/-/site/settings?_com_liferay_site_admin_web_portlet_SiteSettingsPortlet_redirect=http%3A%2F%2Flocalhost%3A8080%2Fgroup%2Fminium%2F%7E%2Fcontrol_panel%2Fmanage%2F-%2Fsite%2Fsettings&_com_liferay_site_admin_web_portlet_SiteSettingsPortlet_historyKey=&p_p_state=normal');
  await page.getByLabel('Open Applications Menu').click();*/
  await page.getByRole('link', { name: 'minium' }).click();
  /*await page.getByRole('link', { name: 'Account Management'}).click();
  await page.getByLabel('Add Account').click();
  await page.getByLabel('Account Name').click();
  await page.getByLabel('Account Name').fill('commerce');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Catalog' }).click();*/
  await expect(page.locator('.account-name .text-truncate')).toHaveText('commerce');
  /*await page.locator('#vpth_column_2d_2_1_add_to_cart').getByRole('button', { name: 'Add to Cart' }).click();*/
  const res = await page.locator('button.mini-cart-opener').getAttribute('data-badge-count');
  expect(res).toBe('2');
  await expect(page.locator('button.mini-cart-opener').getAttribute('data-badge-count')).toEqual(1);
  await page.locator('button.mini-cart-opener').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByPlaceholder('Name', { exact: true }).click();
  await page.getByPlaceholder('Name', { exact: true }).fill('victor');
  await page.getByPlaceholder('Name', { exact: true }).press('Tab');
  await page.getByPlaceholder('Phone Number').fill('387379');
  await page.getByPlaceholder('Phone Number').press('Tab');
  await page.getByPlaceholder('Address', { exact: true }).fill('via del mare');
  await page.getByPlaceholder('Address', { exact: true }).press('Tab');
  await page.getByTitle('Country').selectOption('20245');
  await page.getByPlaceholder('Zip').click();
  await page.getByPlaceholder('Zip').fill('70056');
  await page.getByPlaceholder('City').click();
  await page.getByPlaceholder('City').fill('molfetta');
  await page.getByTitle('Region').selectOption('424');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Go to Order Details' }).click();
});