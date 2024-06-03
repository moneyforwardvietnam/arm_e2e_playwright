import { test, expect } from '@playwright/test';
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page';

test('C116652_Verify can Hide and Show filter functionality', async ({ page }) => {
  test.info().annotations.push({ type: "test_id", description: "C116652" });
  const testName = test.info().title;
  console.log(`${testName} - started`);
  const opportunityPage = new OpportunityPage(page)
  await opportunityPage.NavigateToOpportunity();
  //Initial Show Filter
  await expect(opportunityPage.OpportunityIDFilter).toBeVisible()
  await expect(opportunityPage.OpportunityClientFilter).toBeVisible()
  await expect(opportunityPage.OpportunityContractStartDateFilter).toBeVisible()
  await expect(opportunityPage.OpportunityContractEndDateFilter).toBeVisible()
  await expect(opportunityPage.OpportunityDepartmentFilter).toBeVisible()
  await expect(opportunityPage.OpportunityDataSourceFilter).toBeVisible()
  //Hide Filter
  await opportunityPage.OpportunityFilterFormToggle.click()
  await expect(opportunityPage.OpportunityIDFilter).toBeHidden()
  await expect(opportunityPage.OpportunityClientFilter).toBeHidden()
  await expect(opportunityPage.OpportunityContractStartDateFilter).toBeHidden()
  await expect(opportunityPage.OpportunityContractEndDateFilter).toBeHidden()
  await expect(opportunityPage.OpportunityDepartmentFilter).toBeHidden()
  await expect(opportunityPage.OpportunityDataSourceFilter).toBeHidden()
  //Again Show Filter
  await opportunityPage.OpportunityFilterFormToggle.click()
  await expect(opportunityPage.OpportunityIDFilter).toBeVisible()
  await expect(opportunityPage.OpportunityClientFilter).toBeVisible()
  await expect(opportunityPage.OpportunityContractStartDateFilter).toBeVisible()
  await expect(opportunityPage.OpportunityContractEndDateFilter).toBeVisible()
  await expect(opportunityPage.OpportunityDepartmentFilter).toBeVisible()
  await expect(opportunityPage.OpportunityDataSourceFilter).toBeVisible()
});