import { test, expect } from '@playwright/test';
import { Default_claim_deposit_accounts_Tax } from '@pages/Settings/Default_claim_deposit_accounts_Tax_Pages.page'
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page'

test.describe('ARM-6094_TestSuite', async () => {
  test('C165025_OfficeTaxSettingTooltip', async ({ page }) => {
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await page.locator('section').getByRole('img').click(); //? Question mark icon
    await expect(page.locator("//div[@role='tooltip']")).toHaveText('請求書にて、品目の単価を税込（内税）もしくは税抜（外税）として計算します。');
  });

  test('C165026_TaxExcludeSetting_OpportunityCreateScreen', async ({ page }) => {
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
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    const opportunityPage = new OpportunityPage(page);
    //Set Tax setting as Tax Exclude
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await TaxSettingPage.SetTaxExclude();
    // Navigate to Opportunity
    await opportunityPage.NavigateToOpportunity();
    await opportunityPage.NewOpportunity();
  });















  test('C165033_TaxIncludeSetting_OpportunityCreateScreen', async ({ page }) => {
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    const opportunityPage = new OpportunityPage(page);
    //Set Tax setting as Tax Include
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await TaxSettingPage.SetTaxInclude();
    // Navigate to Opportunity
    await opportunityPage.NavigateToOpportunity();
    await opportunityPage.NewOpportunity();
    await expect(opportunityPage.Cell.nth(1)).toHaveText('単価 税込');
    await expect(opportunityPage.Cell.nth(3)).toHaveText('販売合計額 税込');
  });

  test('C165034_TaxIncludeSetting_OpportunityCreateScreenHideColumn', async ({ page }) => {
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    const opportunityPage = new OpportunityPage(page);
    //Set Tax setting as Tax Include
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await TaxSettingPage.SetTaxInclude();
    // Navigate to Opportunity
    await opportunityPage.NavigateToOpportunity();
    await opportunityPage.NewOpportunity();
  });
  
  test('C165035_TaxIncludeSetting_OpportunityDetailScreen', async ({ page }) => {
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    const opportunityPage = new OpportunityPage(page);
    //Set Tax setting as Tax Include
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await TaxSettingPage.SetTaxInclude();
    // Navigate to Opportunity
    await opportunityPage.NavigateToOpportunity();
    await opportunityPage.NewOpportunity();
  });
  test('C165036_TaxIncludeSetting_OpportunityDetailScreenHideColumn', async ({ page }) => {
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    const opportunityPage = new OpportunityPage(page);
    //Set Tax setting as Tax Include
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await TaxSettingPage.SetTaxInclude();
    // Navigate to Opportunity
    await opportunityPage.NavigateToOpportunity();
    await opportunityPage.NewOpportunity();
  });   
});

