import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116073_Verify Create button in the quotation creation screen is enabled initially', async ({ page }) => {
//Quotation Creation
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await expect(quotationPage.QuotationMenu).toHaveText('見積書');
await expect(quotationPage.QuotationNewBtn).toHaveText('新規作成');
await expect(quotationPage.QuotationNewBtn).toBeEnabled();
await quotationPage.NewQuotation();
})
