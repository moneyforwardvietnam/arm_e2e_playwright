import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test.skip('C116077_Verify Rows will be deleted while clicking on Delete row(削除) in quotation screen', async ({ page }) => {
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
await quotationPage.ItemAdd.click();
await quotationPage.Item.nth(1).click();
await page.getByText('IPHONE12').click();
await quotationPage.ItemAdd.click();
await quotationPage.Item.nth(2).click();
await page.getByText('IPHONE13').click();
await quotationPage.ItemDelete.click(); //check the delete row function
await quotationPage.ItemDelete.nth(1).click();
await quotationPage.ItemDelete.nth(2).click();
await quotationPage.QuotationCreateBtn.click();
});