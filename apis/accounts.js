import { test, expect, request } from '@playwright/test';

async function addAccountViaAPI(request, accountName, accountType) {

    console.log(accountName + accountType);

    const data = {
        name: accountName,
        status: 0,
        type: accountType
        }

    console.log(data);

    const newCatalogResponse = await request.post('/o/headless-admin-user/v1.0/accounts', { data });
    expect(newCatalogResponse.status()).toEqual(200);
};

module.exports = { addAccountViaAPI }
