import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test.skip('C116110_Verify Previous and Next button functionality.spec', async ({ page }) => {
//Validation message check
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.QuotationPageNavigationFwd.click(); // page navigation not working
await page.waitForTimeout(2000);
await quotationPage.QuotationPageNavigationBwd.click();
await page.waitForTimeout(2000);

});