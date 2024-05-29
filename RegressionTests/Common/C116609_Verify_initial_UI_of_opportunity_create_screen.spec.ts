import { test, expect } from '@playwright/test';
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page'
const PlaceHolder = '選択してください'  //PlaceHolder for input when its empty

test('C116609_Verify_initial_UI_of_opportunity_create_screen', async ({ page }) => {
  test.info().annotations.push({ type: "test_id", description: "C116609" });

  //Navigate to Opportunity  
  const opportunityPage = new OpportunityPage(page);
  await opportunityPage.NavigateToOpportunity();
  await opportunityPage.NewOpportunity();
  //Label check
  await expect(opportunityPage.ClientLabel).toHaveText('取引先1');
  await expect(opportunityPage.ClientDepartmentLabel).toHaveText('取引先部門 任意');
  await expect(opportunityPage.InvoiceAddressLabel).toHaveText('請求先');
  await expect(opportunityPage.ContractPeriodLabel).toHaveText('契約期間');
  await expect(opportunityPage.DepartmentLabel).toHaveText('部門 任意');
  await expect(opportunityPage.ClaimAccountLabel).toContainText('債権の勘定科目');
  await expect(opportunityPage.ClaimSubAccountLabel).toContainText('債権の補助科目 任意');
  //Empty check
  await expect(opportunityPage.Client).toHaveText(PlaceHolder);
  await expect(opportunityPage.ClientDepartment).toHaveText(PlaceHolder);
  await expect(opportunityPage.InvoiceAddress).toHaveText(PlaceHolder);
  await expect(opportunityPage.Department).toHaveText(PlaceHolder);
  //QuestionMark Icon check
  await expect(opportunityPage.ClaimAccounQuestionMarkIcon).toBeVisible();
  await expect(opportunityPage.ClaimSubAccountQuestionMarkIcon).toBeVisible();
  await opportunityPage.ClaimAccounQuestionMarkIcon.hover();
  await opportunityPage.ClaimSubAccountQuestionMarkIcon.hover();
  //Item Headers
  await expect(opportunityPage.Cell.nth(0)).toHaveText('品目名');
  await expect(opportunityPage.Cell.nth(1)).toHaveText('単価 税抜');
  await expect(opportunityPage.Cell.nth(2)).toHaveText('数量');
  await expect(opportunityPage.Cell.nth(3)).toHaveText('販売合計額 税抜');
  await expect(opportunityPage.Cell.nth(4)).toHaveText('税率');
  await expect(opportunityPage.Cell.nth(5)).toHaveText('販売合計額 税込');
  await expect(opportunityPage.Cell.nth(6)).toHaveText('売上計上回数');
  await expect(opportunityPage.Cell.nth(7)).toHaveText('支払回数');
  await expect(opportunityPage.Cell.nth(8)).toHaveText('合計');
  await expect(opportunityPage.Cell.nth(9)).toHaveText('-');
  await expect(opportunityPage.Cell.nth(10)).toHaveText('-');
  //Item Input validations
  await expect(opportunityPage.ItemPrice).toBeEmpty();
  await expect(opportunityPage.ItemQuantity).toHaveValue('1');
  await expect(opportunityPage.ItemPaymentCount).toHaveValue('1');
  await expect(opportunityPage.ItemSaleCount).toHaveValue('1');
  await expect(opportunityPage.ItemDelete).toBeEnabled();
  await expect(opportunityPage.ItemAdd).toBeEnabled();
  await expect(opportunityPage.Memo).toBeEmpty();
  await expect(opportunityPage.OpportunityCreateBtn).toBeEnabled();
});