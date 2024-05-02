import { test, expect } from '@playwright/test';
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page';

test('C116652_Verify can Hide and Show filter functionality', async ({ page }) => {
  //Opportunity creation
  const opportunityPage = new OpportunityPage(page)
  await opportunityPage.NavigateToOpportunity();
  await expect(opportunityPage.OpportunityClientFilter).toBeVisible()
  await opportunityPage.OpportunityFilterFormToggle.click()
  await expect(opportunityPage.OpportunityClientFilter).toBeVisible()
  await opportunityPage.OpportunityFilterFormToggle.click()
  
});