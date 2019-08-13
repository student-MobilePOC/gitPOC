import { Given, When, Then } from "cucumber";
import { Course } from "../../src/layout";


Given('the {string} alreay has an {string} acount', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('the {string} wants to add a {string} with course code, {string}', function (string, title, code) {
    // Write code here that turns the phrase above into concrete actionsstring2
    this.course = new Course(code);
    return 'pending';
});

Then('a new course will be added', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});