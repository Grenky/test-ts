export class LoginPage {

    loginpage_login = '#uname';
    loginpage_password = '#pwd';
    loginpage_click = '[type="submit"]';

    navigate(url: string) {
        cy.visit(url)
    }
    enterUserName(username: string) {
        cy.get(this.loginpage_login).type(username)
    }
    enterPassword(password: string){
        cy.get(this.loginpage_password).type(password)
    }
    clickLogin() {
        cy.get(this. loginpage_click).click()
    }

}