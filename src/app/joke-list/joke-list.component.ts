<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Joke } from './Joke';
// import { Joke } from 'src/app/joke-list/Joke'

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: Joke[];

  constructor() {

    this.jokes = [

      new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
    ]
  }

  ngOnInit() {
  }

  toggle(joke) {
    joke.hide = !joke.hide;
  }

}
||||||| merged common ancestors
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: Object[];

  constructor() {

    this.jokes = [
      {
        setup: "What did the cheese say when it looked in the mirror?",
        punchline: "Hello-Me (Halloumi)",
        hide: true
      },
      {
        setup: "What kind of cheese do you use to disguise a small horse?",
        punchline: "Mask-a-pony (Mascarpone)",
        hide: true
      },
      {
        setup: "A kid threw a lump of cheddar at me",
        punchline: "I thought ‘That’s not very mature’",
        hide: true
      },
    ]

  }

  ngOnInit() {
  }

  toggle(joke: Object) {
    joke.hide = !joke.hide;
  }

}
>>>>>>> 9dd5fa979b73a5a3314aea61cd30ffcbf7166358
