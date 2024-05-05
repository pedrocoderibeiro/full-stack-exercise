export class TimeService {
  getCurrentSecondLastTwoDigits(): number {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const lastTwoDigits = seconds % 100; // Extract the last two digits
    return lastTwoDigits;
  }
}
