import { expect, Locator, Page } from "@playwright/test"

const userName = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;
const baseURL = process.env.BASEURL as string;

export class LoginPage {
    readonly page: Page
    readonly loginInit: Locator
    readonly username: Locator
    readonly password: Locator
    readonly signIn: Locator
    readonly noThanks: Locator
    readonly profile: Locator
    readonly logoutBtn: Locator
    readonly LoginBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.loginInit = this.page.getByRole('button', { name: 'マネーフォワード IDでログイン' })
        this.username = this.page.getByPlaceholder('example@moneyforward.com')
        this.signIn = this.page.getByRole('button', { name: 'Sign in' })
        this.password = this.page.getByLabel('Password', { exact: true })
        this.noThanks = this.page.getByRole('link', { name: 'No thanks' })
        this.profile = this.page.locator('.user__name')
        this.logoutBtn = this.page.getByText('ログアウト')
        this.LoginBtn = this.page.getByRole('link', { name: 'Login' })        
    }
    async login() {
        await this.loginInit.click()
        console.log('Login button was clicked')
        await this.username.fill(userName)
        console.log('User Name was entered')
        await this.signIn.click()
        console.log('SignIn button was clicked')
        await this.password.fill(password)
        console.log('Password was entered')
        await this.signIn.click()
        console.log('SignIn button was clicked')
        //await this.noThanks.click()
        //console.log('No Thanks button was clicked')
        await this.page.waitForURL(baseURL+'/reports/invoice_balances',{ timeout: 90000 });
        console.log('Successfully logged in to '+baseURL)
    }    
    async logout(){
        await this.profile.click()
        await this.logoutBtn.click()
        await expect(this.logoutBtn).toBeVisible()
    }
}