import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116105_Validation for Honorific Title Field', async ({ page }) => {
//Quotation Creation
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.NewQuotation();
await quotationPage.Client.click();
await page.getByText('A2D PC DOC').click();
await quotationPage.HonorificTitle.click();
await quotationPage.HonorificTitle.clear();
await quotationPage.HonorificTitle.fill('QATestDataQATestDataQATestData1');
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.HonorificTitleValidation).toHaveText('敬称は30文字以内で入力してください');
await quotationPage.HonorificTitle.click();
await quotationPage.HonorificTitle.clear();
await quotationPage.HonorificTitle.fill('QATestDataQATestDataQATestData');
await quotationPage.QuotationCreateBtn.click();
});