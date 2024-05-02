import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116084_Verify If Quantity and Unit Price is not filled, Subtotal and Tax rate sub total column shows 0', async ({ page }) => {
//Quotation Creation
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.NewQuotation();
await quotationPage.Client.click();
await page.getByText('A2D PC DOC').click();
await quotationPage.Clientdetails.click();
await quotationPage.Clientdetails.fill('〒600-0970 東京都PDKT Vijay Towers');
await quotationPage.Title.click();
await quotationPage.Title.fill('Quotation 1');
await quotationPage.QuotationDate.click();
await page.getByText('1', { exact: true }).first().click();
await quotationPage.ExpirationDate.click();
await page.getByText('29').nth(3).click();
await quotationPage.Item.click();
await page.getByText('IPHONE11').click();
//await quotationPage.Item.click();
await quotationPage.Item.clear();
await quotationPage.Item.click();
await quotationPage.Item.fill('QATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDa');
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.ItemNameValidation).toHaveText('200文字以内で入力してください');
});