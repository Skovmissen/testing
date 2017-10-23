export function greeting(time: Date) {
    let hours = time.getHours();
    if (hours < 4 || hours >= 22) {
        return "Good night"+ hours;
    } else if (hours < 12) {
        return "Good morning" + hours;
    } else if (hours < 18) {
        return "Good afternoon" + hours;
    } else {
        return "Good evening" + hours;
    }
}