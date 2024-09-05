/// <reference types="Cypress" />

import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import { loginPageElements } from "../../../PageObjects/PageActions/LoginPageActions"

const Login_Elements =new loginPageElements

Given('Visit Orange HRM Website', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

When('User provide username', function(){

    Login_Elements.username('Admin')

})

When('User provide password', function(){
    
    Login_Elements.password('admin123')

})

Then('Click on Login button to log in into the Orange HRM Website', function(){
    
    Login_Elements.LoginButton()

})

Then('I should be redirected to the dashboard', () =>{
    
    cy.url().should('include', '/dashboard')

})
