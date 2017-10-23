import { greeting } from '../greeting';
describe("Suite", () => {
    it("should say 'Good morning' at 4am", () => {
        let time = new Date();
        let hours = time.getHours();
        time.setHours(4);
        expect(greeting(time)).toBe("Good morning" + hours);
    });
    it("should say 'Good afternoon' at 12pm", () => {
        let time = new Date();
        time.setHours(12);
        expect(greeting(time)).toBe("Good afternoon");
    });
    it("should say 'Good evening' at 6pm", () => {
        let time = new Date();
        time.setHours(18);
        expect(greeting(time)).toBe("Good evening");
    });
    it("should say 'Good night' at 10pm", () => {
        let time = new Date();
        time.setHours(22);
        expect(greeting(time)).toBe("Good night");
    });
});