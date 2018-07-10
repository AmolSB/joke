export class Joke {
  constructor(public setup: string, public punchline: string, public hide: boolean = true) { }

  toggle() {
    this.hide = !this.hide;
  }
}