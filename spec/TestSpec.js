"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting_1 = require("../greeting");
describe("Suite", function () {
    it("should say 'Good morning' at 4am", function () {
        var time = new Date();
        var hours = time.getHours();
        expect(greeting_1.greeting(time)).toBe("Good morning" + hours);
    });
    it("should say 'Good afternoon' at 12pm", function () {
        var time = new Date();
        var hours = time.getHours();
        expect(greeting_1.greeting(time)).toBe("Good afternoon" + hours);
    });
    it("should say 'Good evening' at 6pm", function () {
        var time = new Date();
        var hours = time.getHours();
        expect(greeting_1.greeting(time)).toBe("Good evening" + hours);
    });
    it("should say 'Good night' at 10pm", function () {
        var time = new Date();
        var hours = time.getHours();
        expect(greeting_1.greeting(time)).toBe("Good night" + hours);
    });
});
