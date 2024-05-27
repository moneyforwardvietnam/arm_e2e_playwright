import { expect, Locator, Page } from "@playwright/test"
const baseURL = process.env.BASEURL as string;

export class Default_claim_deposit_accounts_Tax {
    readonly page: Page
    //Tax Page Elements
    readonly TaxIncludeRadioButton: Locator
    readonly TaxExcludeRadioButton: Locator
    readonly SaveBtn: Locator

    constructor(page: Page) {
        this.page = page        
        //Tax Page Elements
        this.TaxIncludeRadioButton = this.page.getByRole('radio', { name: '税込' });
        this.TaxExcludeRadioButton = this.page.getByRole('radio', { name: '税抜' });
        this.SaveBtn = this.page.locator('button.el-button.btn-save');   
    }
    async NavigateToOfficeTaxSettingScreen() {
        await this.page.getByRole('menuitem', { name: '設定' }).click();
        await this.page.locator('li').filter({ hasText: '債権・入金の科目のデフォルト, 消費税' }).locator('div').click();
        await this.page.getByRole('link', { name: '消費税' }).click();
        await this.page.waitForURL(baseURL+'/settings/tax_rounding_method/edit',{ timeout: 30000 });
    }
    async SetTaxInclude(){
        await this.TaxIncludeRadioButton.click();
        await this.SaveBtn.click();
        await expect(this.TaxIncludeRadioButton).toBeEnabled();
    }
    async SetTaxExclude(){
        await this.TaxExcludeRadioButton.click();
        await this.SaveBtn.click();
        await expect(this.TaxExcludeRadioButton).toBeEnabled();
    }    
}