

const loginElementLocators = require('../PageElements/LoginPageElements.json')
export class loginPageElements{

username(un){

    cy.get(loginElementLocators.LoginPageLocators.username_text).type(un)
    return
}

password(pwd){

    cy.get(loginElementLocators.LoginPageLocators.password_text).type(pwd)
    return
}

LoginButton(){

    cy.get(loginElementLocators.LoginPageLocators.login_button).click()
    return
}

}