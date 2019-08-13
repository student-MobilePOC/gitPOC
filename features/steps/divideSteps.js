"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var cucumber_1 = require("cucumber");
var calculator_1 = require("../../src/calculator");
cucumber_1.Given("a calculator", function () {
    this.calculator = new calculator_1.Calculator();
});
cucumber_1.When("I divide {int} by {int}", function (n1, n2) {
    this.actual = this.calculator.divide(n1, n2);
});
cucumber_1.Then("the result is {int}", function (expected) {
    chai_1.expect(this.actual).to.be.equal(expected);
});
