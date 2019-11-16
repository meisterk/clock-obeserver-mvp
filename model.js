export class Model {
  constructor() {
    this.timeString = '0:00.00';
  }

  setObserver(observer) {
    this.observer = observer;
  }

  startTimer() {
    setTimeout(function() {
      this.notifyObserver();
    }, 1000);
  }

  getTimeString() {
    return this.timeString;
  }

  notifyObserver() {
    this.observer.update();
  }
}
