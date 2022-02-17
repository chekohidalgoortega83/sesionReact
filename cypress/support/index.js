// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


export const init = () => {
    cy.visit(Cypress.env("home"))
}

export const navivgateToUsersRegistry = () => {
    cy.get("a[data-e2e=userBtn]").click();
    cy.url().should("include", "register/user");
}

export const fillName = () => {
    cy.fixture("data.json").then((data) => {
        cy.get("input[data-e2e=nameInput]").type(data.user.name, {delay: 50}).should("have.value", data.user.name);
    })
}

export const fillSurname = () => {
    cy.fixture("data.json").then((data) => {
        cy.get("input[data-e2e=surnameInput]").type(data.user.surname, {delay: 50}).should("have.value", data.user.surname);
    })
}

export const fillEmail = () => {
    cy.fixture("data.json").then((data) => {
        cy.get("input[data-e2e=emailInput]").type(data.user.email, {delay: 50}).should("have.value", data.user.email);
    })
}

export const checkConfirmEmail = () => {
    cy.get("input[data-e2e=confirmEmailInput]").type("aaaa" , {delay: 50});
    cy.get("label[data-e2e=emailError]").should("be.visible")
    cy.get("input[data-e2e=confirmEmailInput]").clear();
    cy.fixture("data.json").then((data) => {
        cy.get("input[data-e2e=confirmEmailInput]").type(data.user.email, {delay: 50}).should("have.value", data.user.email);
        cy.get("label[data-e2e=emailError]").should("not.exist")
    })
}

export const fillPassword = () => {
    cy.fixture("data.json").then((data) => {
        cy.get("input[data-e2e=passwordInput]").type(data.user.pass, {delay: 50}).should("have.value", data.user.pass);
    })
}

export const checkConfirmPassword = () => {
    cy.get("input[data-e2e=confirmPasswordInput]").type("aaaa" , {delay: 50});
    cy.get("label[data-e2e=passwordError]").should("be.visible")
    cy.get("input[data-e2e=confirmPasswordInput]").clear();
    cy.fixture("data.json").then((data) => {
        cy.get("input[data-e2e=confirmPasswordInput]").type(data.user.pass, {delay: 50}).should("have.value", data.user.pass);
        cy.get("label[data-e2e=passwordError]").should("not.exist")
    })
}

export const CheckCountrySelector = () => {
    cy.fixture("data.json").then((data) => {
        cy.get("select[data-e2e=countruSelector]").select(data.user.country).should("have.value", "sp")
    })
}

export const saveUserData = () => {
    cy.get("button[data-e2e=saveFormBtn]").click();
    cy.get("button[data-e2e=saveFormBtn]").should("be.disabled")
    cy.get("div[role=status]", {timeout: 10000}).should("be.visible")
}

export const checkUser = () => {
    cy.get("a[data-e2e=homeBtn]").click();
    cy.url().should("include", "localhost:3000");
    cy.get("span[data-e2e=InitialMSG]").should("have.text", "Hola Cañita Brava")

}