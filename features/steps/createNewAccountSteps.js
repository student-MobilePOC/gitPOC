"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var account_1 = require("../../src/account");
cucumber_1.Given('their acoount name is {string} and type is {string}', function (accountName, accountType) {
    this.accont = new account_1.Account(accountName, accountType);
    // call a function that will check which account to create 
    //new_account : CreateNewAccount;
    //this.accont = createNewAccount();
});
cucumber_1.When('adding a new school board', function () {
    this.actual = this.accont.newAccount();
});
cucumber_1.Then('account should be created', function () {
});
