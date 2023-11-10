import { test as fixture } from '@playwright/test'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import SitesPage from '../pages/sitesPage'
import MiniumCatalogPage from '../pages/miniumCatalogPage'

const test = fixture.extend({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page))
	},
	homePage: async ({ page }, use) => {
		await use(new HomePage(page))
	},
	sitesPage: async ({ page }, use) => {
		await use(new SitesPage(page))
	},
	miniumCatalogPage: async ({ page }, use) => {
		await use(new MiniumCatalogPage(page))
	}
})
export default test