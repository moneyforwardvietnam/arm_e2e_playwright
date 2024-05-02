import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116104_Validation for Expiration Date', async ({ page }) => {
//Validation message check
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.NewQuotation();
await quotationPage.ExpirationDate.click();
await quotationPage.ExpirationDate.clear();
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.ExpirationDateValidation).toHaveText('入力してください')
});