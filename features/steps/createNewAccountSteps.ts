import { expect } from "chai";
import { Given, When, Then } from "cucumber";
import { Account } from "../../src/account";

Given('their acoount name is {string} and type is {string}', function (accountName: string, accountType: string) {
    this.accont = new Account(accountName, accountType);
    // call a function that will check which account to create 
    //new_account : CreateNewAccount;

    //this.accont = createNewAccount();

});

When('adding a new school board', function () {
    this.actual = this.accont.newAccount();
});


Then('account should be created', function() {
    
});