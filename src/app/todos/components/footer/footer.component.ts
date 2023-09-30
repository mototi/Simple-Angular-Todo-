import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  noTodos = new Observable<boolean>();

  isAllSelected = true;
  isCompletedSelected = false;
  isActiveSelected = false;

  num = 0;

  constructor( private _todoService : TodosService) {
    this.noTodos = this._todoService.tasks.pipe(
      map((tasks) => tasks.length > 0)
      );

    this._todoService.tasks.subscribe((tasks) => {
      next : {
        this.num = tasks.filter((task) => !task.status).length;
      }
    });
  }

  filter( varr : string ){
    this._todoService.filterTasks(varr);
  }

  clearCompleted(){
    this._todoService.clearComplete();
  }

  completeAll(){
    this._todoService.completeAll();
  }

}
