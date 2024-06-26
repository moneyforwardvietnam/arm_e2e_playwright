import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116098_Validation for Client Name.spec', async ({ page }) => {
//Validation message check
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.NewQuotation();
await quotationPage.Client.click();
await page.getByText('A2D PC DOC').click();
await quotationPage.Clientdetails.click();
await quotationPage.Clientdetails.clear();
await quotationPage.Clientdetails.fill('QATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQ12')
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.ClientDetailValidation).toHaveText('1000文字以内で入力してください')
});