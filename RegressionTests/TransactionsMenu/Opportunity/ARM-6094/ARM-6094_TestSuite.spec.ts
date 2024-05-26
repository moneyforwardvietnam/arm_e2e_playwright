import { test, expect } from '@playwright/test';
import { Default_claim_deposit_accounts_Tax } from '@pages/Settings/Default_claim_deposit_accounts_Tax_Pages.page'
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page'

test.describe('ARM-6094_TestSuite', async () => {
  test('OfficeSettingMessage', async ({ page }) => {
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await page.locator('section').getByRole('img').click(); //? Question mark icon
    await expect(page.locator("//div[@role='tooltip']")).toHaveText('請求書にて、品目の単価を税込（内税）もしくは税抜（外税）として計算します。');
  });

  test('SetTaxExcludeSetting', async ({ page }) => {
    const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
    const opportunityPage = new OpportunityPage(page);
    //Set Tax setting as Tax Exclude
    await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
    await TaxSettingPage.SetTaxExclude();
    // Navigate to Opportunity
    await opportunityPage.NavigateToOpportunity();
    await opportunityPage.NewOpportunity();
  });
  test('SetTaxInludeSetting', async ({ page }) => {
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

