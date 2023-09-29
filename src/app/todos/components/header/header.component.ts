import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  newTask: string = '';

  constructor(private _todosService : TodosService) { }

  addTask() {
    this._todosService.addTask(this.newTask);
    this.newTask = '';
  }
}
