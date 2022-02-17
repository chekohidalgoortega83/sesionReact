import { checkUser, saveUserData, CheckCountrySelector, checkConfirmPassword, fillPassword, fillName, init, navivgateToUsersRegistry, fillSurname, fillEmail, checkConfirmEmail } from "../support";

context("Check User Register", () => {
    it("Visit home", () => {
        init();
    });

    it("Go to users registry", () => {
        navivgateToUsersRegistry();
    })

    it("Fill name", () => {
        fillName();
    })

    it("Fill surname", () => {
        fillSurname();
    })

    it("Fill email", () => {
        fillEmail();
    })

    it("Check confirm email", () => {
        checkConfirmEmail();
    })

    it("Fill password", () => {
        fillPassword();
    })

    it("Check confirm password", () => {
        checkConfirmPassword();
    })

    it("Check country selector", () => {
        CheckCountrySelector()
    })

    it("Save data", () => {
        saveUserData();
    })

    it("Return to home and checkuser exists", () => {
        checkUser()
    })
});
