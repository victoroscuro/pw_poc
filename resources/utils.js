import { test } from '@playwright/test';

async function resolvePath (locator, parameter) {
    return await locator.replace("{parameter}", parameter); 
};

module.exports = { resolvePath }