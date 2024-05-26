import { expect, Locator, Page } from "@playwright/test"
const baseURL = process.env.BASEURL as string;

export class OpportunityPage {
    readonly page: Page
    //Menu Page Elements
    readonly OpportunityMenu: Locator
    

    constructor(page: Page) {
        this.page = page        
        //Menu Page Elements
        this.OpportunityMenu = this.page.getByRole('menuitem', { name: '案件' })
        
    }
    async NavigateToOpportunity() {
        await this.page.goto(baseURL);
        await this.OpportunityMenu.click();
        await this.page.waitForURL(baseURL+'/transactions/opportunities',{ timeout: 60000 });
    }

}