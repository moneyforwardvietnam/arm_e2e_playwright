import { test, expect } from '@playwright/test';
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page'

test('C116610_Verify validate for create opportunity screen', async ({ page }) => {
  //Navigate to Opportunity  
  const opportunityPage = new OpportunityPage(page)
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
  //Empty Validations
  await opportunityPage.ItemPrice.clear();
  await opportunityPage.ItemQuantity.clear();
  await opportunityPage.ItemSaleCount.clear();
  await opportunityPage.ItemPaymentCount.clear();
  await opportunityPage.OpportunityCreateBtn.click();
  await expect(opportunityPage.ItemValidation).toHaveText('必須項目です')
  await expect(opportunityPage.ItemPriceValidation).toHaveText('必須項目です')
  await expect(opportunityPage.ItemQuantityValidation).toHaveText('必須項目です')
  await expect(opportunityPage.ItemSaleCountValidation).toHaveText('入力してください')
  await expect(opportunityPage.ItemPaymentCountValidation).toHaveText('必須項目です')
  //Maximum Input validations
  await opportunityPage.Item.click();
  await page.getByText('IPHONE11').click();
  await opportunityPage.ItemPrice.click();
  await opportunityPage.ItemPrice.fill('10000000000')
  await opportunityPage.ItemQuantity.click();
  await opportunityPage.ItemQuantity.fill('1000000000');
  await opportunityPage.ItemSaleCount.click();
  await opportunityPage.ItemSaleCount.fill('100')
  await opportunityPage.ItemPaymentCount.click();
  await opportunityPage.ItemPaymentCount.fill('100');
  await opportunityPage.OpportunityCreateBtn.click();
  await expect(opportunityPage.ItemPriceValidation).toHaveText('値が大きすぎます')
  await expect(opportunityPage.ItemQuantityValidation).toHaveText('値が大きすぎます')
  await expect(opportunityPage.ItemSaleCountValidation).toHaveText('99以下の整数で入力してください')
  await expect(opportunityPage.ItemPaymentCountValidation).toHaveText('99以下の値にしてください')
  //Minimum Input validations
  await opportunityPage.ItemPrice.clear();
  await opportunityPage.ItemPrice.fill('-10000000000')
  await opportunityPage.ItemQuantity.clear();
  await opportunityPage.ItemQuantity.fill('-1000000000');
  await opportunityPage.ItemSaleCount.clear();
  await opportunityPage.ItemSaleCount.fill('-100')
  await opportunityPage.ItemPaymentCount.clear();
  await opportunityPage.ItemPaymentCount.fill('-100');
  await opportunityPage.OpportunityCreateBtn.click();
  await expect(opportunityPage.ItemPriceValidation).toHaveText('値が小さすぎます')
  await expect(opportunityPage.ItemQuantityValidation).toHaveText('値が小さすぎます')
  await expect(opportunityPage.ItemSaleCountValidation).toHaveText('0以上の整数で入力してください')
  await expect(opportunityPage.ItemPaymentCountValidation).toHaveText('1以上の値にしてください')
});