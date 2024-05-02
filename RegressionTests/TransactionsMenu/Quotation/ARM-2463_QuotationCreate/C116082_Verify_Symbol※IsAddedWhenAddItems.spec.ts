import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116082_Verify ※ is added for multiple items have reduced 8% tax and remarks is added for ※', async ({ page }) => {
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
await quotationPage.TaxRate.click();
await quotationPage.TaxList.filter({ hasText: '(軽)8%' }).click(); //If you want to select 0% - use /^0%$/
await quotationPage.ItemAdd.click()
await quotationPage.Item.nth(1).click();                       // 2nd Row of Item
await page.getByText('IPHONE12').click();
await quotationPage.TaxRate.nth(1).click();
await quotationPage.TaxList.filter({ hasText: '(軽)8%' }).nth(1).click();
await quotationPage.Note.fill('PlaywrightTest');
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.MarkAstrik).toHaveText('※')
});