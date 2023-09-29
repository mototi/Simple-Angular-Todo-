import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/tasks.model';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from 'src/app/model/filterEnum.model';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  filteredTodos = new Observable<Task[]>();

  displayall = new Observable<boolean>();

  showList : boolean = true;

  constructor(private _todosService : TodosService) {
    this.displayall = this._todosService.tasks.pipe(
      map((tasks) => tasks.length > 0)
      );
    //comineLatest
    this.filteredTodos = combineLatest([
      this._todosService.tasks,
      this._todosService.filter
    ]
    ).pipe(
      map(([tasks, filter]) => {
        switch (filter) {
          case FilterEnum.Active:
            return tasks.filter(task => !task.status);
          case FilterEnum.Completed:
            return tasks.filter(task => task.status);
          default:
            return tasks;
        }
      })
    );
  }
}
