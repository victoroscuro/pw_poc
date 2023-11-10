import { test, expect } from '@playwright/test';

const data = { currencyCode: 'USD', defaultLanguageId: 'en_US', name: 'New Catalogue' };

test('test', async ({ request }) => {
  const newCatalogResponse = await request.post('/o/headless-commerce-admin-catalog/v1.0/catalogs', { data });
  expect(newCatalogResponse.status()).toEqual(200);
    //http://localhost:8080/o/headless-commerce-admin-catalog/v1.0/catalogs
});