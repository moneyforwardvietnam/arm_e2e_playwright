import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116106_Validation for Title Field', async ({ page }) => {
//Quotation Creation
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.NewQuotation();
await quotationPage.Client.click();
await page.getByText('A2D PC DOC').click();
await quotationPage.Title.click();
await quotationPage.Title.fill('QATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQ');
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.TitleValidation).toHaveText('200文字以内で入力してください');
await quotationPage.Title.click();
await quotationPage.Title.clear();
await quotationPage.Title.fill('QATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestDataQATestData');
await quotationPage.QuotationCreateBtn.click();
});