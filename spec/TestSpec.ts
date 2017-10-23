import { greeting } from '../greeting';
describe("Suite", () => {
    it("should say 'Good morning' at 4am", () => {
        let time = new Date();
        let hours = time.getHours();
        expect(greeting(time)).toBe("Good morning" + hours);
    });
    it("should say 'Good afternoon' at 12pm", () => {
        let time = new Date();
        let hours = time.getHours();
        expect(greeting(time)).toBe("Good afternoon" + hours);
    });
    it("should say 'Good evening' at 6pm", () => {
        let time = new Date();
        let hours = time.getHours();
        expect(greeting(time)).toBe("Good evening" + hours);
    });
    it("should say 'Good night' at 10pm", () => {
        let time = new Date();
        let hours = time.getHours();
        expect(greeting(time)).toBe("Good night" + hours);
    });
});