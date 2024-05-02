import { expect, Locator, Page } from "@playwright/test"
const baseURL = process.env.BASEURL as string;

export class QuotationPage {
    readonly page: Page
    //Menu Page Elements
    readonly QuotationMenu: Locator
    readonly QuotationTitlebar: Locator
    readonly QuotationNewBtn: Locator
    //New Page Elements
    readonly Client: Locator
    readonly Clientdetails: Locator
    readonly HonorificTitle: Locator
    readonly Title: Locator
    readonly QuotationNumber: Locator
    readonly QuotationDate: Locator
    readonly ExpirationDate: Locator
    readonly Item: Locator
    readonly Price: Locator
    readonly Quantity: Locator
    readonly TaxRate: Locator
    readonly TaxList: Locator
    readonly Total: Locator
    readonly ItemDetail: Locator
    readonly ItemDelete: Locator
    readonly ItemAdd: Locator
    readonly MarkAstrik: Locator
    readonly Note: Locator
    readonly QuotationCreateBtn: Locator
    readonly QuotationCancelBtn: Locator
    readonly QuotationX: Locator

    //Validation Elements
    readonly QuotationNumberValidation: Locator
    readonly QuotationDateValidation: Locator
    readonly ExpirationDateValidation: Locator
    readonly ClientNameValidation: Locator
    readonly ClientDetailValidation: Locator
    readonly HonorificTitleValidation: Locator
    readonly TitleValidation: Locator
    readonly ItemNameValidation:Locator
    readonly ItemUnitPriceValidation:Locator
    readonly ItemQuantityValidation:Locator
    readonly ItemDetailValidation:Locator
    readonly NoteValidation:Locator

    //Filter Page Elements
    readonly QuotationNumFilter: Locator
    readonly QuotationClientFilter: Locator
    readonly QuotationTitleFilter: Locator
    readonly QuotationDateFilter: Locator
    readonly QuotationCreatorFilter: Locator
    readonly QuotationEstAmountFilter: Locator
    readonly ResetBtn: Locator
    readonly QuotationFilterBtn: Locator
    readonly FirstRowQuotation: Locator
    readonly QuotationPageNavigationFwd: Locator
    readonly QuotationPageNavigationBwd: Locator
    readonly QuotationFilterToggle: Locator
    readonly QuotationNoData: Locator
    readonly QuotationNumberLable: Locator

    //Detail Page Elements
    readonly DeleteBtn: Locator
    readonly DeleteConfirm: Locator
    readonly DeleteCancel: Locator
    readonly ClientD: Locator
    readonly QuotaionBackBtn: Locator
    readonly QuotationEditBtn: Locator
    readonly QuotaionDuplicateBtn: Locator
    readonly QuotaionDownloadPdfBtn: Locator
    readonly QuotationTotal: Locator

    constructor(page: Page) {
        this.page = page        
        //Menu Page Elements
        this.QuotationTitlebar = this.page.locator('.title-bar--main')
        this.QuotationMenu = this.page.getByRole('menuitem', { name: '見積書' })
        this.QuotationNewBtn = this.page.getByRole('button', { name: '新規作成' })

        //Filter Page Elements
        this.QuotationNumFilter = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[1]/form/div[1]/div/div/input');
        this.QuotationClientFilter = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[1]/form/div[2]/label');
        this.QuotationTitleFilter = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[1]/form/div[3]/label');
        this.QuotationDateFilter = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[1]/form/div[4]/label');
        this.QuotationCreatorFilter = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[2]/form/div[1]/label');
        this.QuotationEstAmountFilter = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[2]/form/div[2]/label');
        this.QuotationFilterToggle = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[2]');
        this.ResetBtn = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[3]/button[1]');
        this.QuotationFilterBtn = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[1]/section/div[3]/button[2]');
        this.QuotationNoData = this.page.locator('//*[@id="__layout"]/div/main/div/section/div[3]/div')
        this.QuotationPageNavigationBwd = this.page.locator('//*[@id="__layout"]/div/main/div/section/div[1]/div/svg[1]')
        this.QuotationPageNavigationFwd = this.page.locator('//*[@id="__layout"]/div/main/div/section/div[1]/div/svg[2]')
        this.FirstRowQuotation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div[2]/div/div[3]')
    

        //New Page Elements
        this.Client = this.page.locator('form').filter({ hasText: '取引先: A2D PC DOCTAMIL TECH' }).getByRole('button').getByRole('textbox')
        this.Clientdetails = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[1]/div/div[2]/div[2]/div/div/div/textarea')
        this.HonorificTitle = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div/input')
        this.Title = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[1]/div/div[3]/div[2]/div/div/div/input')
        this.QuotationNumber = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[2]/div/div[1]/div[2]/div/div/div/input')
        this.QuotationDate = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[2]/div/div[2]/div[2]/div/div/div/input')
        this.ExpirationDate = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[2]/div/div[3]/div[2]/div/div/div/input')
        this.Item = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/div/div[2]/div[2]/div/div[1]/div/form/section/div/div[2]/div/div/div/div/div/input')
        this.Price = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/div/div[2]/div[2]/div/div[1]/div/form/section/div[1]/div[4]/div/div/div/div/input')
        this.Quantity = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/div/div[2]/div[2]/div/div[1]/div/form/section/div[1]/div[5]/div/div/div/div/input')
        this.TaxRate = this.page.getByRole('button', { name: '%' })
        this.TaxList = this.page.locator('li')
        this.ItemDetail = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/div/div[2]/div[2]/div/div[1]/div/form/section/div[2]/div[2]/div/div/div/div/textarea')
        this.ItemAdd = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/div/div[3]/button/span')
        this.MarkAstrik = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/div/div[2]/div[2]/div/div[1]/div[2]/form/section/div/div[3]/span')        
        this.Note = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[2]/div/div/div[2]/textarea')
        this.QuotationCreateBtn = this.page.locator('//*[@id="__layout"]/div/main/div/div[2]/div[2]/button')
        this.Total = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/div/div[4]/div[2]/div[2]/div[2]/div/div[2]')
        this.QuotationX = this.page.locator('//*[@id="__layout"]/div/main/div/div[1]/div[1]/div');

        //Validation Message Elements
        this.QuotationNumberValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[2]/div/div[1]/div[2]/div/div/div[2]')
        this.QuotationDateValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[2]/div/div[2]/div[2]/div/div/div[2]')
        this.ExpirationDateValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[2]/div/div[3]/div[2]/div/div/div[2]')
        this.ClientNameValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[1]/div/div[1]/div[2]/div[1]/div/div/div[2]')
        this.HonorificTitleValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[2]')
        this.ClientDetailValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[1]/div/div[2]/div[2]/div/div/div[2]')
        this.TitleValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[1]/div/div[1]/div/div[3]/div[2]/div/div/div[2]')
        this.ItemNameValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/div/div[2]/div[2]/div/div[1]/div/form/section/div[1]/div[2]/div/div/div/div[2]')
        this.ItemUnitPriceValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/div/div[2]/div[2]/div/div[1]/div/form/section/div[1]/div[4]/div/div/div/div[2]')
        this.ItemQuantityValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/div/div[2]/div[2]/div/div[1]/div/form/section/div[1]/div[5]/div/div/div/div[2]')
        this.ItemDetailValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/div/div[2]/div[2]/div/div[1]/div/form/section/div[2]/div[2]/div/div/div/div[2]')
        this.NoteValidation = this.page.locator('//*[@id="__layout"]/div/main/div/section/div/div/form[2]/div/div/div[3]')


        //Detail Page Elements
        this.DeleteBtn = this.page.locator('//*[@id="__layout"]/div/main/div/section/div[9]/button')
        this.DeleteConfirm = this.page.getByLabel('dialog').getByRole('button', { name: '削除' })
        this.QuotationEditBtn = this.page.locator('.list-item__content').first()
        this.QuotaionDuplicateBtn = this.page.locator('.list-item__content').first()
        this.QuotaionDownloadPdfBtn = this.page.locator('.list-item__content').first()
        this.QuotaionBackBtn = this.page.locator('.list-item__content').first()
        this.ClientD = this.page.locator('//*[@id="page-1"]/div/div[5]/div[9]/div[1]/div/div[1]/div[1]/div[1]/span')
        this.QuotationTotal = this.page.locator('//*[@id="page-1"]/div/div[5]/div[9]/div[1]/div/div[4]/div[2]/div[2]/div[2]/div/div[2]')
    
    }
    async NavigateToQuotation() {
        await this.page.goto(baseURL);
        await this.QuotationMenu.click();
        await this.page.waitForURL(baseURL+'/quotations',{ timeout: 60000 });
    }
    async NewQuotation() {
        await this.QuotationNewBtn.click();
        await this.page.waitForURL(baseURL+'/quotations/new',{ timeout: 60000 });
    }
}