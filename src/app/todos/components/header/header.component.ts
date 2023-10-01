import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  newTask: string = '';

  fontFamily: string = '';

  constructor(private _todosService : TodosService) { }

  addTask() {
    if (this.newTask.trim() === '') {
      return;
    }
    this._todosService.addTask(this.newTask);
    this.newTask = '';
  }

  onInput(event: Event) {
    const inputText = (event.target as HTMLInputElement).value;
    const arabicRegex = /[\u0600-\u06FF]/;
    const englishRegex = /[A-Za-z]/;

    if (arabicRegex.test(inputText)) {
      this.fontFamily = 'Cairo, sans-serif';
    } else if (englishRegex.test(inputText)) {
      this.fontFamily = 'Roboto, sans-serif';
    } else {
      this.fontFamily = 'Roboto, sans-serif';
    }
  }
}
