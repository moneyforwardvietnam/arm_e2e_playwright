import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116081_Verify Quotation is created with the mandatory fields alone', async ({ page }) => {
//Quotation Creation
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.NewQuotation();
await quotationPage.Client.click();
await page.getByText('A2D PC DOC').click();
await quotationPage.Clientdetails.click();
await quotationPage.Clientdetails.clear();
await quotationPage.Title.click();
await quotationPage.Title.clear();
await quotationPage.QuotationDate.click();
await page.getByText('1', { exact: true }).first().click();
await quotationPage.ExpirationDate.click();
await page.getByText('29').nth(3).click();
await quotationPage.Item.click();
await page.getByText('IPHONE11').click();
await quotationPage.Price.click();
await quotationPage.Price.clear();
await quotationPage.Quantity.click();
await quotationPage.Quantity.clear();
await quotationPage.ItemDetail.click();
await quotationPage.ItemDetail.clear();
await quotationPage.Note.click();
await quotationPage.Note.clear();
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.ClientD).toHaveText('A2D PC DOC 御中')
});