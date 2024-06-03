import { test, expect } from '@playwright/test';
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page';

test('C116631_Verify user can Delete Opportunity when Opportunity not created invoice', async ({ page }) => {
  test.info().annotations.push({ type: "test_id", description: "C116631" });
  const testName = test.info().title;
  console.log(`${testName} - started`);
  //Opportunity script
  const opportunityPage = new OpportunityPage(page)
  await opportunityPage.NavigateToOpportunity();
  await opportunityPage.OpportunityClientFilter.click({timeout: 30000});
  await page.getByText('A2D PC DOC').click({timeout: 30000});
  await opportunityPage.OpportunityInvoiceUnCreatedCheckbox.click();
  await opportunityPage.OpportunityFilterSearchBtn.click();
  await page.waitForTimeout(2000);
  await opportunityPage.FirstRowOpportunity.click();
  await expect(opportunityPage.ClientDetail).toHaveText('A2D PC DOC');
  await opportunityPage.DeleteBtn.click();
  await opportunityPage.DeleteConfirm.click();
  await page.getByText('案件を削除しました。').click();
  await page.getByRole('alert').locator('i').nth(1).click();
});