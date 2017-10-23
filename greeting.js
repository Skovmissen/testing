"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeting(time) {
    var hours = time.getHours();
    if (hours < 4 || hours >= 22) {
        return "Good night" + hours;
    }
    else if (hours < 12) {
        return "Good morning" + hours;
    }
    else if (hours < 18) {
        return "Good afternoon" + hours;
    }
    else {
        return "Good evening" + hours;
    }
}
exports.greeting = greeting;
