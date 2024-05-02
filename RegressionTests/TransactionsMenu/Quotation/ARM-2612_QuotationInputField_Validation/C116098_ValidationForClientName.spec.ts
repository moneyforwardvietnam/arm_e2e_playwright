import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116098_Validation for Client Name.spec', async ({ page }) => {
//Validation message check
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.NewQuotation();
await quotationPage.Client.click();
await page.getByText('A2D PC DOC').click();
await quotationPage.Client.clear(); //Maximum length check // not working
await quotationPage.Client.fill('QATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDat');
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.ClientNameValidation).toHaveText('取引先は70文字以内で入力してください')
await quotationPage.Client.click(); //Empty validation check
await quotationPage.Client.clear();
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.ClientNameValidation).toHaveText('取引先を入力してください');
});