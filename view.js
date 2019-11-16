export class View {
  constructor() {
    this.output = document.getElementById('output');
  }

  displayString(text) {
    this.output.innerHTML = text;
  }
}
