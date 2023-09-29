import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterEnum } from 'src/app/model/filterEnum.model';
import { Task } from 'src/app/model/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  tasks = new BehaviorSubject<Task[]>([]);

  filter = new BehaviorSubject<FilterEnum>(FilterEnum.All);

  constructor() { }

  addTask(text: string) {
    const task: Task = {
      id: Math.random().toString(),
      text,
      status: false
    };
    const currentTasks = this.tasks.getValue();
    this.tasks.next([...currentTasks, task]);
  }
}
