import { test, expect } from '@playwright/test';
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page'

test('C116606_Verify cannot Bulk Delete when opportunity have related invoice', async ({ page }) => {
  //Opportunity script
  const opportunityPage = new OpportunityPage(page)
  await opportunityPage.NavigateToOpportunity();
  await page.waitForTimeout(2000);
  await opportunityPage.OpportunityInvoiceCreatedCheckbox.check();
  await opportunityPage.OpportunityFilterSearchBtn.click();
  await opportunityPage.OpportunityBulkCheckBox.check();
  await page.waitForTimeout(5000);
  await expect(opportunityPage.OpportunityBulkDeleteBtn).toBeDisabled();
});