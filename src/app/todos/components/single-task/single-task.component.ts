import { Component, Input , Output } from '@angular/core';
import { Task } from 'src/app/model/tasks.model';
import { TodosService } from 'src/app/todos/services/todos.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent {

  @Input() task !: Task ;

  constructor(private _todosService : TodosService) { }

  changeStatus() {
    this._todosService.changeStatus(this.task.id);
  }

  changeText(event : Event) {
    const value = (event.target as HTMLInputElement).value;
    // delete task if input is empty
    if(value == "") {
      this.deleteTask();
      return;
    }
    // blur input if text is not changed
    if(value == this.task.text) {
      (event.target as HTMLInputElement).blur();
      return;
    }
    // change text
    this._todosService.changeText(this.task.id, value);
    this.task.text = value;
    (event.target as HTMLInputElement).blur();
  }

  deleteTask() {
    this._todosService.deleteTask(this.task.id);
  }

}
