import { LoginPage } from "../pages/login-page.cy"

const loginPage = new LoginPage()

it('this is login test', function() {
  loginPage.navigate('https://trytestingthis.netlify.app/')
  loginPage.enterUserName('test')
  loginPage.enterPassword('test')
  loginPage.clickLogin()
})