export class Model {
  constructor() {
    this.timeString = '0:00.00';
  }

  setObserver(observer) {
    this.observer = observer;
  }

  startTimer() {
    setInterval(function() {
      console.log('TIMEOUT');
    }, 1000);
  }

  getTimeString() {
    return this.timeString;
  }

  notifyObserver() {
    this.observer.update();
  }
}
