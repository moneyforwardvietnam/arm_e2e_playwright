import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test.skip('C116072_Verify UI of Quotation Menu in Left Menu bar & Create screen of quotation', async ({ page }) => {
//Quotation Creation
const quotationPage = new QuotationPage(page)
    await quotationPage.NavigateToQuotation();
    await expect(quotationPage.QuotationTitlebar).toHaveText('見積書')               
    await expect(quotationPage.QuotationNumFilter).toHaveText('見積書番号')             
    await expect(quotationPage.QuotationClientFilter).toHaveText('取引先') 
    await expect(quotationPage.QuotationTitleFilter).toHaveText('件名')
     await expect(quotationPage.QuotationDateFilter).toHaveText('見積日') 
     await expect(quotationPage.QuotationCreatorFilter).toHaveText('作成者')  
     await expect(quotationPage.QuotationEstAmountFilter).toHaveText('見積金額') 
     await expect(quotationPage.QuotationCreatorFilter).toBeEnabled() 
     await expect(quotationPage.QuotationFilterToggle).toBeVisible() 
     await expect(quotationPage.ResetBtn).toBeEnabled() 
     await expect(quotationPage.QuotationFilterBtn).toBeEnabled()
    await expect(quotationPage.QuotationNewBtn).toHaveText('新規作成');
    await expect(quotationPage.QuotationNewBtn).toBeEnabled();
})
