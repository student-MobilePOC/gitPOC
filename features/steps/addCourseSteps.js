"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var layout_1 = require("../../src/layout");
cucumber_1.Given('the {string} alreay has an {string} acount', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.When('the {string} wants to add a {string} with course code, {string}', function (string, title, code) {
    // Write code here that turns the phrase above into concrete actionsstring2
    this.course = new layout_1.Course(code);
    return 'pending';
});
cucumber_1.Then('a new course will be added', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
