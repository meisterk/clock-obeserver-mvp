export class Presenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.model.setObserver(this);
    this.model.startTimer();
  }

  update() {
    const text = this.model.getTimeString();
    this.view.displayString(text);
  }
}
