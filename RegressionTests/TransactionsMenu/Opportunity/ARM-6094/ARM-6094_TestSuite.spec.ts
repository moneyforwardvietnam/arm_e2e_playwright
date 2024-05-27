import { test, expect } from '@playwright/test';
import { Default_claim_deposit_accounts_Tax } from '@pages/Settings/Default_claim_deposit_accounts_Tax_Pages.page'
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page'
const baseURL = process.env.BASEURL as string;

test.describe('ARM-6094_TestSuite', async () => {
  test('C165025_OfficeTaxSettingTooltip', async ({ page }) => {
    test.info().annotations.push({ type: "test_id", description: "C165025" });
    await page.goto(baseURL);
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await page.locator('section').getByRole('img').click(); //? Question mark icon
    await expect(page.locator("//div[@role='tooltip']")).toHaveText('請求書にて、品目の単価を税込（内税）もしくは税抜（外税）として計算します。');
  });

  test('C165026_TaxExcludeSetting_OpportunityCreateScreen', async ({ page }) => {
    test.info().annotations.push({ type: "test_id", description: "C165026" });
    await page.goto(baseURL);
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    const opportunityPage = new OpportunityPage(page);
    //Set Tax setting as Tax Exclude
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await TaxSettingPage.SetTaxExclude();
    // Navigate to Opportunity
    await opportunityPage.NavigateToOpportunity();
    await opportunityPage.NewOpportunity();
    await expect(opportunityPage.Cell.nth(1)).toHaveText('単価 税抜');
    await expect(opportunityPage.Cell.nth(3)).toHaveText('販売合計額 税抜');
    await expect(opportunityPage.Cell.nth(5)).toHaveText('販売合計額 税込');
  });

  test('C165027_TaxExcludeSetting_OpportunityDetailScreen', async ({ page }) => {
    test.info().annotations.push({ type: "test_id", description: "C165027" });
    await page.goto(baseURL);
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    const opportunityPage = new OpportunityPage(page);
    //Set Tax setting as Tax Exclude
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await expect(TaxSettingPage.TaxExcludeRadioButton).toBeEnabled();
    // Navigate to Opportunity
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
    await opportunityPage.Memo.fill('Tax-Exlude setting');
    await opportunityPage.OpportunityCreateBtn.click();                         //Create new opportunity
    await page.getByText('案件を作成しました。 詳細').click(); 
    await page.getByRole('link', { name: '詳細' }).click();
    await expect(opportunityPage.ClientDetail).toHaveText('A2D PC DOC');
    await expect(opportunityPage.Cell.nth(6)).toHaveText('単価 税抜');            //Tax-Exclude unit price
    await expect(opportunityPage.Cell.nth(8)).toHaveText('販売合計額 税抜');       //Tax-Exclude Total amount
    await expect(opportunityPage.Cell.nth(10)).toHaveText('販売合計額 税込');      //Tax-Include Total amount
  });















  test('C165033_TaxIncludeSetting_OpportunityCreateScreen', async ({ page }) => {
    test.info().annotations.push({ type: "test_id", description: "C165033" });
    await page.goto(baseURL);
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    const opportunityPage = new OpportunityPage(page);
    //Set Tax setting as Tax Include
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await TaxSettingPage.SetTaxInclude();
    // Navigate to Opportunity
    await opportunityPage.NavigateToOpportunity();
    await opportunityPage.NewOpportunity();
    await expect(opportunityPage.Cell.nth(1)).toHaveText('単価 税込');      //Tax-Include unit price
    await expect(opportunityPage.Cell.nth(3)).toHaveText('販売合計額 税込'); //Tax-Include Total amount
  });

  test('C165034_TaxIncludeSetting_OpportunityCreateScreenHideColumn', async ({ page }) => {
    test.info().annotations.push({ type: "test_id", description: "C165034" });
    await page.goto(baseURL);
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    const opportunityPage = new OpportunityPage(page);
    //Set Tax setting as Tax Include
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await expect(TaxSettingPage.TaxIncludeRadioButton).toBeEnabled();
    // Navigate to Opportunity
    await opportunityPage.NavigateToOpportunity();
    await opportunityPage.NewOpportunity();
    await expect(opportunityPage.Cell.nth(5)).toHaveText('売上計上回数'); // Removed Tax-include column
  });
  
  test.skip('C165035_TaxIncludeSetting_OpportunityDetailScreen', async ({ page }) => {
    test.info().annotations.push({ type: "test_id", description: "C165035" });
    await page.goto(baseURL);
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    const opportunityPage = new OpportunityPage(page);
    //Set Tax setting as Tax Include
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await expect(TaxSettingPage.TaxIncludeRadioButton).toBeEnabled();
    // Navigate to Opportunity
    await opportunityPage.NavigateToOpportunity();
    await opportunityPage.NewOpportunity();
  });
  test.skip('C165036_TaxIncludeSetting_OpportunityDetailScreenHideColumn', async ({ page }) => {
    test.info().annotations.push({ type: "test_id", description: "C165036" });
    await page.goto(baseURL);
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    const opportunityPage = new OpportunityPage(page);
    //Set Tax setting as Tax Include
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await expect(TaxSettingPage.TaxIncludeRadioButton).toBeEnabled();
    // Navigate to Opportunity
    await opportunityPage.NavigateToOpportunity();
  });   
});

