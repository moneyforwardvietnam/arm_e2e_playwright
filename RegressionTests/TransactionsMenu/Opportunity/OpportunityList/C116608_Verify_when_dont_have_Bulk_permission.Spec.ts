import { test, expect } from '@playwright/test';
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page';

test.skip('C116608_Verify when dont have Bulk permission', async ({ page }) => {
  //Opportunity script
  const opportunityPage = new OpportunityPage(page)
  await opportunityPage.NavigateToOpportunity();
  await page.waitForTimeout(2000);
  await expect(opportunityPage.OpportunityBulkInvoiceCreateBtn).toBeDisabled();
  await expect(opportunityPage.OpportunityBulkDeleteBtn).toBeDisabled();
  opportunityPage.OpportunityBulkInvoiceCreateBtn.hover();
  opportunityPage.OpportunityBulkInvoiceCreateBtn.hover();
  opportunityPage.OpportunityBulkDeleteBtn.hover();
  opportunityPage.OpportunityBulkDeleteBtn.hover();
});