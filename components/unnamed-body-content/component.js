export default class {
  onCreate() {
    this.state = {
      x: "a",
    };
  }

  toggle() {
    this.state.x = this.state.x === "a" ? "b" : "a";
  }
}
