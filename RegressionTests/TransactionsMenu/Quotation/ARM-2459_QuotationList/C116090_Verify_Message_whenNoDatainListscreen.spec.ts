import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116090_Verify_Message_whenNoDatainListscreen.spec', async ({ page }) => {
//Quotation Creation
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.QuotationNumFilter.click();
await quotationPage.QuotationNumFilter.fill('No Data Check');
await quotationPage.QuotationFilterBtn.click();
await expect(quotationPage.QuotationNoData).toHaveText('見積書がありません')


});