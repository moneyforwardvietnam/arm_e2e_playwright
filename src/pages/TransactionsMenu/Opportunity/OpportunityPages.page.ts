import { expect, Locator, Page } from "@playwright/test"
const baseURL = process.env.BASEURL as string;

export class OpportunityPage {
    readonly page: Page
    //Menu Page Elements
    readonly OpportunityMenu: Locator
    readonly OpportunityTitleBar: Locator
    readonly OpportunityImportBtn: Locator
    readonly OpportunityNewBtn: Locator
    //New Page Elements
    readonly Client: Locator
    readonly ClientDepartment: Locator
    readonly InvoiceAddress: Locator
    readonly ContractPeriod: Locator
    readonly Department: Locator
    readonly ClaimAccount: Locator
    readonly ClaimSubAccount: Locator
    //New Page Element Labels
    readonly ClientLabel: Locator
    readonly ClientDepartmentLabel: Locator
    readonly InvoiceAddressLabel: Locator
    readonly ContractPeriodLabel: Locator
    readonly DepartmentLabel: Locator
    readonly ClaimAccountLabel: Locator
    readonly ClaimSubAccountLabel: Locator
    readonly ClaimAccounQuestionMarkIcon: Locator
    readonly ClaimSubAccountQuestionMarkIcon: Locator
    //New Page Item Elements
    readonly Item: Locator
    readonly ItemPrice: Locator
    readonly ItemQuantity: Locator
    readonly ItemSaleCount: Locator
    readonly ItemPaymentCount: Locator
    readonly ItemAdd: Locator
    readonly ItemDelete: Locator
    readonly Memo: Locator
    readonly OpportunityCreateBtn: Locator
    readonly Cell: Locator
    //Validation Elements - Item
    readonly ItemValidation: Locator
    readonly ItemPriceValidation: Locator
    readonly ItemQuantityValidation: Locator
    readonly ItemSaleCountValidation: Locator
    readonly ItemPaymentCountValidation: Locator
    //Filter Page Elements
    readonly OpportunityIDFilter: Locator
    readonly OpportunityDepartmentFilter: Locator
    readonly OpportunityClientFilter: Locator
    readonly OpportunityContractStartDateFilter: Locator
    readonly OpportunityContractEndDateFilter: Locator
    readonly OpportunityInvoiceUnCreatedCheckbox: Locator
    readonly OpportunityInvoiceCreatedCheckbox: Locator
    readonly OpportunityDataSourceFilter: Locator
    readonly OpportunityFilterSearchBtn: Locator
    readonly OpportunityFilterResetBtn: Locator
    readonly OpportunityFilterFormToggle: Locator
    readonly OpportunityBulkInvoiceCreateBtn: Locator
    readonly OpportunityBulkDeleteBtn: Locator
    readonly FirstRowOpportunity: Locator
    readonly OpportunityBulkCheckBox: Locator
    //Detail Page Elements
    readonly DeleteBtn: Locator
    readonly DeleteConfirm: Locator
    readonly DeleteCancel: Locator
    readonly ClientDetail: Locator

    constructor(page: Page) {
        this.page = page        
        //Menu Page Elements
        this.OpportunityMenu = this.page.getByRole('menuitem', { name: '案件' })
        this.OpportunityTitleBar = this.page.locator('.title-bar--main')
        this.OpportunityImportBtn = this.page.getByRole('button', { name: 'インポート' })
        this.OpportunityNewBtn = this.page.locator('//*[@id="__layout"]/div/main/div/div[1]/div[3]/div/button/span')
        //New Page Elements
        this.Client = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/form/div[1]/div/div/div/div')
        this.ClientDepartment = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/form/div[2]/div/div/div/div')
        this.InvoiceAddress = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/form/div[3]/div/div/div/div')
        this.ContractPeriod = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/form/div[4]/div/div')
        this.Department = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/form/div[5]/div/div/div/div')
        this.ClaimAccount = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/form/div[6]/div/div/div/div')
        this.ClaimSubAccount = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/form/div[7]/div/div/div/div')
        //New Page Element Labels
        this.ClientLabel = this.page.locator('label[for="masterClientId"]')
        this.ClientDepartmentLabel = this.page.locator('label[for="masterClientDepartmentId"]')
        this.InvoiceAddressLabel = this.page.locator('label[for="masterInvoiceAddressId"]')
        this.ContractPeriodLabel = this.page.locator('label[for="contractPeriod"]')
        this.DepartmentLabel = this.page.locator('label[for="masterDepartmentId"]')
        this.ClaimAccountLabel = this.page.locator('label[for="claimMasterAccountId"]')
        this.ClaimSubAccountLabel = this.page.locator('label[for="claimChildMasterAccountId"]')        
        this.ClaimAccounQuestionMarkIcon = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/form/div[6]/label/div/span[2]/span/div')
        this.ClaimSubAccountQuestionMarkIcon = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/form/div[7]/label/div/span[2]/span/div')
        //New Page Item Elements
        this.Item = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div[1]/div[2]/div[2]/div/form[1]/div[1]/div/div')
        this.ItemPrice = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div[1]/div[2]/div[2]/div/form/div[2]/div/div/div/div[1]/input')
        this.ItemQuantity = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div[1]/div[2]/div[2]/div/form/div[3]/div/div/div/div[1]/input')
        this.ItemSaleCount = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div[1]/div[2]/div[2]/div/form/div[7]/div/div/div/div/input')
        this.ItemPaymentCount = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div[1]/div[2]/div[2]/div/form/div[8]/div/div/div/div/input')
        this.ItemDelete = this.page.locator('div.delete-link')
        this.ItemAdd =  this.page.getByRole('button', { name: '追加' })
        this.Memo = this.page.getByPlaceholder('メモを入力')
        this.OpportunityCreateBtn = this.page.getByRole('button', { name: '作成' })
        this.Cell = this.page.locator('div.cell')
        //Validation Elements
        this.ItemValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div[1]/div[2]/div[2]/div/form/div[1]/div/div/div/div[2]')
        this.ItemPriceValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div[1]/div[2]/div[2]/div/form/div[2]/div/div/div/div[2]')
        this.ItemQuantityValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div[1]/div[2]/div[2]/div/form/div[3]/div/div/div/div[2]')
        this.ItemSaleCountValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div[1]/div[2]/div[2]/div/form/div[7]/div/div/div/div[2]')
        this.ItemPaymentCountValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div[1]/div[2]/div[2]/div/form/div[8]/div/div/div/div[2]')
        //Filter Page Elements
        this.OpportunityIDFilter = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[1]/form/div[1]/div/div/input')
        this.OpportunityDepartmentFilter = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[1]/form/div[2]/div/div/div/div')
        this.OpportunityClientFilter = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[1]/form/div[3]/div/div/div/div')
        this.OpportunityContractStartDateFilter = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[1]/form/div[4]/div/div')
        this.OpportunityContractEndDateFilter = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[2]/form/div[1]/div/div')
        this.OpportunityInvoiceUnCreatedCheckbox = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[2]/form/div[2]/div/div/label[1]/span[1]')
        this.OpportunityInvoiceCreatedCheckbox = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[2]/form/div[2]/div/div/label[2]/span[1]')
        this.OpportunityDataSourceFilter = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[2]/form/div[3]/div/div/div/div')
        this.OpportunityFilterResetBtn = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[3]/button[2]')
        this.OpportunityFilterSearchBtn = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[3]/button[2]')
        this.OpportunityFilterFormToggle = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[2]')
        this.OpportunityBulkInvoiceCreateBtn = this.page.locator('//*[@id="__layout"]/div/main/div/section/div[1]/div[2]/div[2]/button[1]')
        //this.OpportunityBulkDeleteBtn = this.page.locator('//*[@id="__layout"]/div/main/div/section/div[1]/div[2]/div[2]/button[2]')
        this.FirstRowOpportunity = this.page.locator('td:nth-child(4)').first()
        this.OpportunityBulkCheckBox = this.page.locator('//*[@id="__layout"]/div/main/div/section/div[1]/div[1]/label/span/input')
        //this.OpportunityBulkCheckBox = this.page.locator('.bulk-selection > .el-checkbox > .el-checkbox__input > .el-checkbox__inner')
        this.OpportunityBulkDeleteBtn =  this.page.getByRole('button', { name: '削除' })
        //await page.getByRole('button', { name: '請求書作成' }).click();

        //Detail Page Elements
        this.DeleteBtn = this.page.locator('//*[@id="__layout"]/div/main/div/section/div[9]/button')
        this.DeleteConfirm = this.page.getByLabel('dialog').getByRole('button', { name: '削除' })
        this.ClientDetail = this.page.locator('.list-item__content').first()
    }
    async NavigateToOpportunity() {
        await this.OpportunityMenu.click();
        await this.page.waitForURL(baseURL+'/transactions/opportunities',{ timeout: 60000 });
    }
    async NewOpportunity() {
        await this.OpportunityNewBtn.click();
        await this.page.waitForURL(baseURL+'/transactions/opportunities/new',{ timeout: 60000 });
    }
}