import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116088 _Verify clicking on ▽(絞り込み条件) hides filter condition in Quotation list.spec', async ({ page }) => {
//Quotation Creation
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.QuotationFilterToggle.click();
await quotationPage.QuotationFilterToggle.click();

});