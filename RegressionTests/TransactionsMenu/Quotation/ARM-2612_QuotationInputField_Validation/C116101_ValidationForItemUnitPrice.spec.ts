import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116101_Validation for Item Unit Price', async ({ page }) => {
//Quotation Creation
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.NewQuotation();
await quotationPage.Client.click();
await page.getByText('A2D PC DOC').click();
await quotationPage.QuotationDate.click();
await page.getByText('1', { exact: true }).first().click();
await quotationPage.ExpirationDate.click();
await page.getByText('29').nth(3).click();
await quotationPage.Item.click();
await page.getByText('IPHONE11').click();
await quotationPage.Price.click();
await quotationPage.Price.clear();
await quotationPage.Price.fill('-10000000000'); //with max negative value
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.ItemUnitPriceValidation).toHaveText('-1,000,000,000以上の値を入力してください');
await quotationPage.Price.click();
await quotationPage.Price.clear();
await quotationPage.Price.fill('10000000000'); //with max positive value
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.ItemUnitPriceValidation).toHaveText('1,000,000,000以下の値を入力してください');
await quotationPage.Price.click();
await quotationPage.Price.clear();
await quotationPage.Price.fill('0'); //with 0 value
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.ClientD).toHaveText('A2D PC DOC 御中');
});