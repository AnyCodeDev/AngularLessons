import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  word: string = 'an apple';
  translation: string = 'яблоко';
  status: boolean = true;
  canAddWord: boolean = false;

  constructor() {
    setTimeout(() => {
      this.canAddWord = true;
    }, 2000);
  }


  getWordStatus(): string {
    return this.status ? 'Изучено' : 'Ещё не изучено';
  }
}
