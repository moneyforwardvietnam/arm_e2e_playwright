import { test, expect } from '@playwright/test';
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page'

test('C116600_Verify Opportunity List UI when empty', async ({ page }) => {
  test.info().annotations.push({ type: "test_id", description: "C116600" });
  //Opportunity script
  const opportunityPage = new OpportunityPage(page)
  await opportunityPage.NavigateToOpportunity();
  await expect(opportunityPage.OpportunityTitleBar).toHaveText('案件')              // Title bar - 案件
  await expect(opportunityPage.OpportunityImportBtn).toBeEnabled()                 // 新規作成
  await expect(opportunityPage.OpportunityIDFilter).toBeVisible()                  // 案件ID
  await expect(opportunityPage.OpportunityDepartmentFilter).toBeVisible()          // 部門 
  await expect(opportunityPage.OpportunityClientFilter).toBeVisible()              // 取引先
  await expect(opportunityPage.OpportunityContractStartDateFilter).toBeVisible()   // 契約開始日
  await expect(opportunityPage.OpportunityContractEndDateFilter).toBeVisible()     // 契約終了日
  await expect(opportunityPage.OpportunityInvoiceUnCreatedCheckbox).toBeVisible()  // 未作成
  await expect(opportunityPage.OpportunityInvoiceCreatedCheckbox).toBeVisible()    // 作成済
  await expect(opportunityPage.OpportunityDataSourceFilter).toBeVisible()          // データソース
  await expect(opportunityPage.OpportunityFilterResetBtn).toBeEnabled              // リセット
  await expect(opportunityPage.OpportunityFilterSearchBtn).toBeEnabled()           // 絞り込み
  await expect(opportunityPage.OpportunityFilterFormToggle).toBeVisible()          // 絞り込み条件
  await expect(opportunityPage.OpportunityBulkInvoiceCreateBtn).toBeEnabled()      // 請求書作成
  await expect(opportunityPage.OpportunityBulkDeleteBtn).toBeEnabled()             // 削除
});