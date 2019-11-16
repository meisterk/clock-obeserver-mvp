export class Model {
  constructor() {
    this.timeString = '0:00.00';
    this.self = this;
  }

  setObserver(observer) {
    this.observer = observer;
  }

  startTimer() {
    const self = this;
    setInterval(function() {
      self.changeTime();
      self.notifyObserver();
    }, 1000);
  }

  changeTime() {
    this.timeString = new Date().toLocaleString();
  }

  getTimeString() {
    return this.timeString;
  }

  notifyObserver() {
    this.observer.update();
  }
}
