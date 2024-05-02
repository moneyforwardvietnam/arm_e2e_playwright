import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116097_Validation for Issue Date.spec', async ({ page }) => {
//Validation message check
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.NewQuotation();
await quotationPage.QuotationDate.click();
await quotationPage.QuotationDate.clear();
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.QuotationDateValidation).toHaveText('入力してください')
});