import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116096_ValidationForQuotationNumberField.spec', async ({ page }) => {
//Validation message check
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.NewQuotation();
await quotationPage.QuotationNumber.click(); //Maximum length check
await quotationPage.QuotationNumber.clear();
await quotationPage.QuotationNumber.fill('QATestDataQATestDataQATestDataQ');
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.QuotationNumberValidation).toHaveText('30文字以内で入力してください')
await quotationPage.QuotationNumber.click(); //Empty validation check
await quotationPage.QuotationNumber.clear();
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.QuotationNumberValidation).toHaveText('入力してください')
});