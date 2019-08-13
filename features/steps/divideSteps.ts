import { expect } from "chai";
import { Given, When, Then } from "cucumber";
import { Calculator } from "../../src/calculator";

 
Given("a calculator", function() {
    this.calculator = new Calculator();
});
 
When("I divide {int} by {int}", function(n1: number, n2: number) {
    this.actual = this.calculator.divide(n1, n2);
});
 
Then("the result is {int}", function(expected: number) {
    expect(this.actual).to.be.equal(expected);
});