import { test, expect } from '@playwright/test';
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page'

test('C116611_Verify user can Create new opportunity with valid value', async ({ page }) => {
  test.info().annotations.push({ type: "test_id", description: "C116611" });
  const testName = test.info().title;
  console.log(`${testName} - started`);
  //Opportunity creation
  const opportunityPage = new OpportunityPage(page)
  await opportunityPage.NavigateToOpportunity();
  await opportunityPage.NewOpportunity();
  await opportunityPage.Client.click();
  await page.getByText('CLI001A2D PC DOC').click();
  await opportunityPage.ClientDepartment.click();
  await page.getByText('A2DDEPTA2D DEPT').click();
  await opportunityPage.InvoiceAddress.click();
  await page.getByText('INVAD001').click();
  await opportunityPage.ContractPeriod.click()
  await page.getByText('1', { exact: true }).first().click();
  await page.getByText('29').nth(1).click();
  await opportunityPage.Department.click();
  await page.getByText('MOBILE', { exact: true }).click()
  await opportunityPage.ClaimAccount.click();
  await page.getByRole('button', { name: '現金', exact: true }).click()
  await opportunityPage.ClaimSubAccount.click();
  await page.getByRole('button', { name: '小口現金', exact: true }).click()
  await opportunityPage.Item.click();
  await page.getByText('IPHONE11').click();
  await opportunityPage.Memo.fill('PlaywrightTest');
  await opportunityPage.OpportunityCreateBtn.click();
  await page.getByText('案件を作成しました。 詳細').click(); 
  await page.getByRole('link', { name: '詳細' }).click();
  await expect(opportunityPage.ClientDetail).toHaveText('A2D PC DOC');
});